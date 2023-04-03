const _ = require("lodash");
const { program, Option }  = require("commander");
const path = require("path");
const glob = require("glob");
const DICOMParser = require("dicom-parser");
const fs = require("fs");
const { Parser } = require("json2csv");
const { JsonStreamStringify }  = require("json-stream-stringify");
const { profile } = require("./dump-csv/config");
const { JsDcm2Jpeg } = require("./dcm4che/Dcm2Jpeg");
const { HaveContourDcmDumper } = require("./get-have-contour-dcm/have-contour-dcm-dumper");
(async () => {
    program.requiredOption("-d, --dir <string>", "The input directory that you want to dump profile of all DICOM files");
    program.requiredOption("-o, --output-file <string>", "The output CSV destination");
    program.option("--dcm2img");
    program.addOption(new Option("-m, --modalities <string>").default("MR"));
    program.parse();
    
    const options = program.opts(process.argv);
    
    let inputDir = options.dir;
    let outputFile = options.outputFile.split(".").slice(0, -1).join(".");
    let outputFileExt = options.outputFile.split(".").pop();
    let modalities = options.modalities.split(",").map(v => v.toUpperCase());
    let currentWorkingDirectory = process.cwd();
    
    if (!path.isAbsolute(inputDir)) inputDir = path.join(currentWorkingDirectory, inputDir);
    if (!path.isAbsolute(outputFile)) outputFile = path.join(currentWorkingDirectory, outputFile);

    console.log(`input directory: ${inputDir}`);
    console.log(`output file: ${outputFile}`);

    let dicomData = await calculateProfileInDir(inputDir, `${outputFile}.${outputFileExt}`);
    console.log("save DICOM files' metadata finished");

    let haveContourDcmDumper = new HaveContourDcmDumper(dicomData);
    await haveContourDcmDumper.dump();
    console.log("dump info finished");

    let writeStream = new fs.createWriteStream(`${outputFile}-contour-obj.json`);
    let pipeStream = await new JsonStreamStringify(haveContourDcmDumper.contourInfoArray).pipe(writeStream);

    let nonContourWriteStream = new fs.createWriteStream(`${outputFile}-non-contour-obj.json`);
    let nonContourPipeStream = new JsonStreamStringify(haveContourDcmDumper.nonContourObjArray).pipe(nonContourWriteStream);

    if (options.dcm2img) {
        await dcms2img(dicomData, modalities);
    }

    pipeStream.on("finish", ()=> {
        console.log("have contour json stringify completed");
    });

    nonContourPipeStream.on("finish", () => {
        console.log("non contour json stringify completed");
    });
    
})();

async function calculateProfileInDir(inputDir, outputFile) {
    let files = glob.sync("**/*.dcm", {
        cwd: inputDir
    });

    const csvFields = ["filename"];
    profile.forEach(v => csvFields.push(v.tagName));

    const csvOpts = { fields: csvFields};
    
    let fileObjList = [];
    let errorList = [];
    for (let filename of files) {
        let fullFilename = path.join(inputDir, filename);
        let fileBuffer = fs.readFileSync(fullFilename);
        let dicomDataset;
        try {
            dicomDataset = DICOMParser.parseDicom(fileBuffer, {
                untilTag: "x7fe00010"
            });
        } catch(e) {
            console.error(e);
            dicomDataset = e.dataset;
            errorList.push(fullFilename);
            continue;
        }

        let fileDumpObj = {
            filename: fullFilename
        };

        for (let tagInfo of profile) {
            let tagValue = dicomDataset[tagInfo.type](tagInfo.tag) || "";
            fileDumpObj[tagInfo.tagName] = tagValue;
        }

        fileObjList.push(fileDumpObj);
    }

    try {
        const json2csvParser = new Parser(csvOpts);
        const csv = json2csvParser.parse(fileObjList);
        fs.writeFileSync(outputFile, csv);

        if (errorList.length > 0) fs.writeFileSync("error.csv", JSON.stringify(errorList, null, 4));
    } catch(e) {
        console.error(e);
    }

    return fileObjList;
}

async function dcms2img(dicomData, modalities) {
    let jsDcm2Jpeg = new JsDcm2Jpeg({
        ...JsDcm2Jpeg.defaultOptions,
        format: "PNG"
    });
    await jsDcm2Jpeg.init();

    for (let dcm of dicomData) {
        if (modalities.includes(dcm.Modality)) {
            console.log(`convert ${dcm.filename} to png`);
            await jsDcm2Jpeg.convert(dcm.filename, dcm.filename.replace(".dcm", ".png"));
        }
    }
}

