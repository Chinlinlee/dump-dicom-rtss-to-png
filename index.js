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
const { Dcm2JpgExecutor } = require("./dcm4che/wrapper/org/github/chinlinlee/dcm2jpg/Dcm2JpgExecutor");
const { Dcm2JpgExecutor$Dcm2JpgOptions } = require("./dcm4che/wrapper/org/github/chinlinlee/dcm2jpg/Dcm2JpgExecutor$Dcm2JpgOptions");
const { HaveContourDcmDumper } = require("./get-have-contour-dcm/have-contour-dcm-dumper");
const { NonContourDcmDumper } = require("./get-have-contour-dcm/non-contour-dcm-dumper");
const { java } = require("./dcm4che/java-instance");
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
    console.log("dump have contour's DICOM files' info finished");

    let nonContourDcmDumper = new NonContourDcmDumper(dicomData, haveContourDcmDumper.contourInfoArray);
    await nonContourDcmDumper.dump();
    console.log("dump non contour's DICOM files' info finished");

    let writeStream = new fs.createWriteStream(`${outputFile}-contour-obj.json`);
    let pipeStream = await new JsonStreamStringify(haveContourDcmDumper.contourInfoArray).pipe(writeStream);

    let nonContourWriteStream = new fs.createWriteStream(`${outputFile}-non-contour-obj.json`);
    let nonContourPipeStream = new JsonStreamStringify(nonContourDcmDumper.nonContourObjArray).pipe(nonContourWriteStream);

    pipeStream.on("finish", ()=> {
        console.log("have contour json stringify completed");
    });

    nonContourPipeStream.on("finish", () => {
        console.log("non contour json stringify completed");
    });

    if (options.dcm2img) {
        await dcms2img(dicomData, modalities);
        java.clearDaemonProxies();
    }
    
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

    /** @type { Dcm2JpgExecutor$Dcm2JpgOptions } */
    let opt = await Dcm2JpgExecutor$Dcm2JpgOptions.newInstanceAsync();
    opt.format = "PNG";

    for (let dcm of dicomData) {
        if (modalities.includes(dcm.Modality)) {
            console.log(`convert ${dcm.filename} to png`);
            await Dcm2JpgExecutor.convertDcmToJpgFromFilename(dcm.filename, dcm.filename.replace(".dcm", ".png"), opt);
        }
    }
}

