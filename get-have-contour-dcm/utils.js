const { dcm2json } = require("dicom-to-json");
const { DicomUtf8Converter } = require("../dcm4che/DicomUtf8Converter");

async function dcm2JsonNative(filename) {
    return new Promise((resolve, reject) => {
        try {
            dcm2json(filename, function (dicomJsonStr) {
                dicomJsonStr = dicomJsonStr.replace(/,\\u0000/g, '');
                dicomJsonStr = dicomJsonStr.replace(/\\u0000/g, '');
                let dicomJson = JSON.parse(dicomJsonStr);
                return resolve(dicomJson);
            });
        } catch(e) {
            if (e.message.includes("EXITCODE_CANNOT_CONVERT_TO_UNICODE")) {
                console.log(`The file: ${filename} may missing/incorrect (0008,0005) charset, converter dicom to UTF8`);
                try {
                    let dicomUtf8Converter = new DicomUtf8Converter(filename);
                    dicomUtf8Converter.convert().then(() => {
                        dcm2json(filename, function (dicomJsonStr) {
                            dicomJsonStr = dicomJsonStr.replace(/,\\u0000/g, '');
                            dicomJsonStr = dicomJsonStr.replace(/\\u0000/g, '');
                            let dicomJson = JSON.parse(dicomJsonStr);
                            return resolve(dicomJson);
                        });
                    });
                } catch(e) {
                    throw e;
                }
            }
            console.error(e);
            return reject(e);
        }
        
    });
}

module.exports.dcm2JsonNative = dcm2JsonNative;