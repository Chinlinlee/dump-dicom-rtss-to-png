require("./typdef");

class Contour {
    /**
     * 
     * @param {string} contourFilename 
     * @param {DicomData[]} contourDcmInfos
     * @param {DicomData[]} nonContourDcmInfos
     * @param
     */
    constructor(contourFilename, contourDcmInfos, nonContourDcmInfos) {
        /** @type {string} */
        this.contourFilename = contourFilename;

        /** @type {DicomData[]} */
        this.contourDcmInfos = contourDcmInfos;

        /** @type {DicomData[]} */
        this.nonContourDcmInfos = nonContourDcmInfos;
    }

    getJson() {

        return {
            contourFilename: this.contourFilename,
            contourDcmInfos: this.contourDcmInfos,
            nonContourDcmInfos :this.nonContourDcmInfos
        };

    }
}

module.exports.Contour = Contour;