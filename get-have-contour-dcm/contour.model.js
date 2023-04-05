require("./typdef");

class Contour {
    /**
     * 
     * @param {string} contourFilename 
     * @param {DicomData[]} contourDcmInfos
     * @param
     */
    constructor(contourFilename, contourDcmInfos) {
        /** @type {string} */
        this.contourFilename = contourFilename;

        /** @type {DicomData[]} */
        this.contourDcmInfos = contourDcmInfos;
    }

    getJson() {

        return {
            contourFilename: this.contourFilename,
            contourDcmInfos: this.contourDcmInfos
        };

    }
}

module.exports.Contour = Contour;