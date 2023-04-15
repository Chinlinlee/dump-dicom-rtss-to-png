import argparse
import os
import glob

import ijson
import json

from dcminfo import ContourInfo

import pydicom as dicom
import nrrd
import nibabel as nib
import numpy as np


def get_nii_path(rt_path):
    nrrd_paths = glob.glob(f"{rt_path}/**/*.nrrd", recursive=True)

    if len(nrrd_paths) <= 1:
        return None, None
    
    volume = [item for item in nrrd_paths if "refVolume" in item][0]
    label = [item for item in nrrd_paths if "refVolume" not in item]
    if len(label) == 0:
        return None, None

    return volume, label


pass

parser = argparse.ArgumentParser(prog="findNii",
                                 description="Convert Json data's dicom files to nii")

parser.add_argument("-i", "--input", type=str,
                    required=True, help="have contour json file")

args = parser.parse_args()

dcm_info_json_file = args.input
with open(dcm_info_json_file, "rb") as fp:
    current_path = os.path.dirname(os.path.abspath(__file__))
    contour_info_list = []

    dir_names = []
    nrrds = []
    for dcm_info_json in ijson.items(fp, "item"):
        contour_info = ContourInfo(**dcm_info_json)
        if len(contour_info.dcmInfoList) == 0:
            continue

        series_data_path = os.path.dirname(contour_info.dcmInfoList[0].filename)
        img_nrrd_path, mask_nrrd_path = get_nii_path(os.path.dirname(contour_info.contourFilename))
        if mask_nrrd_path is not None:

            nrrds.append({
                "image": img_nrrd_path,
                "mask": mask_nrrd_path
            })
        pass

    pass

    with open(os.path.join(current_path, "3d_dataset.json"), "w+") as dump_fp:
        json.dump(nrrds, dump_fp)
    pass

pass
