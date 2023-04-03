const { dcm2json } = require("dicom-to-json");
const jp = require("jsonpath");
const _ = require("lodash");
const { Contour } = require("./contour.model");

async function getContour(filename, dcmsInfo) {
    try {
        let dicomJson = await dcm2JsonNative(filename);


        let contourSequenceNodes = jp.nodes(dicomJson, "$..30060040");

        // remove skull contour
        let roiNameNodes = jp.apply(dicomJson, "$..30060026.Value", (value) => {
            return value.flat();
        });

        let isSkull = roiNameNodes.pop().value[0].toLowerCase().includes("skull");
        if (isSkull) contourSequenceNodes.pop();


        let contourDcmInfos = await getUidGroupInContourSequenceJpNodes(contourSequenceNodes, dcmsInfo);

        let contour = new Contour(filename, contourDcmInfos);

        return contour;

    } catch (e) {
        console.log(filename);
        throw e;
    }
}

/**
 * 
 * @param {object} contourSequenceNodes 
 */
async function getUidGroupInContourSequenceJpNodes(contourSequenceNodes, dcmsInfo) {
    let contourUidGroup = [];
    try {
        for (let node of contourSequenceNodes) {
            let contourSequence = node.value.Value;

            if (contourSequence) {
                let uidGroup = jp.query(contourSequence, "$..['00081155'].Value").flat();


                contourUidGroup.push(...uidGroup);
            }
        }

        let haveContourDcmInfoArr = await getDicomFileFromContourArray(_.uniq(contourUidGroup), dcmsInfo);

        return haveContourDcmInfoArr;
    } catch (e) {
        throw e;
    }

}

/**
 * 
 * @param {Contour[]} contourArr 
 */
async function getDicomFileFromContourArray(uidArr, data) {

    let haveContourObjArray = [];

        
    let haveContourNodes = jp.nodes(data, `$..SOPInstanceUID`).filter(v => uidArr.includes(v.value));

    for (let node of haveContourNodes) {
        let field = node.path.slice(1, 2).join(".");
        let obj = _.get(data, field);
        haveContourObjArray.push(obj);
    }
    return haveContourObjArray;
}

async function dcm2JsonNative(filename) {
    return new Promise((resolve, reject) => {
        dcm2json(filename, function (dicomJsonStr) {
            dicomJsonStr = dicomJsonStr.replace(/,\\u0000/g, '');
            dicomJsonStr = dicomJsonStr.replace(/\\u0000/g, '');
            let dicomJson = JSON.parse(dicomJsonStr);
            return resolve(dicomJson);
        });
    });
}

module.exports.getContour = getContour;
module.exports.getDicomFileFromContourArray = getDicomFileFromContourArray;

