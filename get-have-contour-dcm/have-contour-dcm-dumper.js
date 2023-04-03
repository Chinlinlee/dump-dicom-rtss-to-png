require("./typdef");
const { Contour } = require("./contour.model");
const { dcm2json } = require("dicom-to-json");
const jp = require("jsonpath");
const _ = require("lodash");

class HaveContourDcmDumper {
    /**
     * 
     * @param {DicomData[]} dicomData
     */
    constructor(dicomDataArray) {
        /** @type {DicomData[]} */
        this.dicomDataArray = dicomDataArray;
        /** @type {Contour[]} */
        this.contourInfoArray = [];

        this.nonContourObjArray = [];
    }


    async dump() {
        for (let data of this.dicomDataArray) {
            let { filename, Modality } = data;
            if (Modality === "RTSTRUCT") {
                console.log(`Start getting Contour's DICOM mapping from ${filename}`)
                let contour = await this.getContour(filename);
                console.log(`End getting Contour's DICOM mapping from ${filename}`)
                this.contourInfoArray.push(contour);
            }
        }
    }

    async getContour(filename) {
        let dicomJson = await dcm2JsonNative(filename);

        let studyInstanceUID = dicomJson["0020000D"]["Value"][0];
        let contourSequenceNodes = jp.nodes(dicomJson, "$..30060040");

        // remove skull contour
        let roiNameNodes = jp.apply(dicomJson, "$..30060026.Value", (value) => {
            return value.flat();
        });

        let isSkull = roiNameNodes.pop().value[0].toLowerCase().includes("skull");
        if (isSkull) contourSequenceNodes.pop();

        let haveContourObjArray = await this.getDcmsInfo(contourSequenceNodes, studyInstanceUID);

        let contour = new Contour(filename, haveContourObjArray);

        return contour;
    }

    async getDcmsInfo(contourSequenceNodes, studyInstanceUID) {
        let contourUidGroup = [];
        try {
            for (let node of contourSequenceNodes) {
                let contourSequence = node.value.Value;

                if (contourSequence) {
                    let uidGroup = jp.query(contourSequence, "$..['00081155'].Value").flat();
                    contourUidGroup.push(...uidGroup);
                }
            }

            return await this.getDicomFileFromContourArray(_.uniq(contourUidGroup), studyInstanceUID);
        } catch (e) {
            throw e;
        }
    }

    /**
     * 
     * @param {string[]} uidArr
     * @param {string} studyInstanceUID
     */
    async getDicomFileFromContourArray(uidArr, studyInstanceUID) {

        let haveContourObjArray = [];

        let instanceUidNodes = jp.nodes(this.dicomDataArray, `$..SOPInstanceUID`);

        let haveContourNodes = instanceUidNodes.filter(v => uidArr.includes(v.value));
        let nonContourObj = this.dicomDataArray.filter(v => 
            !uidArr.includes(v.SOPInstanceUID) &&
            v.StudyInstanceUID == studyInstanceUID
        );

        for (let node of haveContourNodes) {
            let field = node.path.slice(1, 2).join(".");
            let obj = _.get(this.dicomDataArray, field);
            haveContourObjArray.push(obj);
        }

        for(let obj of nonContourObj) {
            if (obj.Modality === "MR")
                this.nonContourObjArray.push(obj);
        }

        this.nonContourObjArray = _.uniqBy(this.nonContourObjArray, "SOPInstanceUID");

        return haveContourObjArray;
    }

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

module.exports.HaveContourDcmDumper = HaveContourDcmDumper;