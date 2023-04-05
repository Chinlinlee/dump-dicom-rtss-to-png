const jp = require("jsonpath");

class NonContourDcmDumper {
    /**
     * 
     * @param {DicomData[]} dicomData
     * @param {Contour[]} haveContourObjArray
     */
    constructor(dicomDataArray, haveContourObjArray) {
        /** @type {DicomData[]} */
        this.dicomDataArray = dicomDataArray;

        this.haveContourObjArray = haveContourObjArray;

        this.nonContourObjArray = [];
    }

    async dump() {
        let haveContourUids = jp.query(this.haveContourObjArray, "$..SOPInstanceUID");
        for (let data of this.dicomDataArray) {
            let { filename, Modality, SOPInstanceUID } = data;
            if (Modality.toUpperCase() === "MR") {
                if(haveContourUids.indexOf(SOPInstanceUID) < 0) {
                    this.nonContourObjArray.push(data);
                }
            }
        }
    }

}

module.exports.NonContourDcmDumper = NonContourDcmDumper;