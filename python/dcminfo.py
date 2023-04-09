
from typing import List, Union
import json

class DcmInfo:

    def __init__(self,
                 filename: str,
                 AccessionNumber: str,
                 PatientID: str,
                 Modality: str, 
                 StudyDescription: str,
                 StudyInstanceUID: str, 
                 SeriesInstanceUID: str, 
                 SOPInstanceUID: str):
        
        self.filename = filename
        self.accessionNumber = AccessionNumber
        self.patientID = PatientID
        self.modality = Modality
        self.studyDescription = StudyDescription
        self.studyInstanceUID = StudyInstanceUID
        self.seriesInstanceUID = SeriesInstanceUID
        self.sopInstanceUID = SOPInstanceUID

    pass


pass

class ContourInfo:
    def __init__(self, 
                 contourFilename: str,
                 contourDcmInfos: Union[list, List[DcmInfo]]
                 ):
        
        self.contourFilename = contourFilename

        if isinstance(contourDcmInfos, list):
            self.dcmInfoList = json.loads(json.dumps(contourDcmInfos), object_hook=lambda v: DcmInfo(**v))
        else:
            self.dcmInfoList = contourDcmInfos
        pass

    pass
        

pass
