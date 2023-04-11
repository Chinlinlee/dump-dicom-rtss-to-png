import argparse
import os
import sys
import subprocess

import ijson

from dcminfo import ContourInfo

import pydicom as dicom


parser = argparse.ArgumentParser(prog="JsonDcm2nii",
                                 description="Convert Json data's dicom files to nii")

parser.add_argument("-i", "--input", type=str,
                    required=True, help="have contour json file")
parser.add_argument("-sp", "--slicer-path", type=str, required=True)

args = parser.parse_args()

def do_dcm2nrrd(rt_folder, series_path):
    current_path = os.path.dirname(os.path.abspath(__file__))
    script_path = os.path.join(current_path, "./slicer/index.py")

    if not os.path.isabs(args.slicer_path):
        slicer_path = os.path.join(current_path, args.slicer_path)
    else:
        slicer_path = args.slicer_path
    pass

    commands = [
        slicer_path,
        "--no-main-window",
        "--python-script",
        script_path,
        "--input-folder",
        rt_folder,
        "--output-folder",
        rt_folder,
        "--ref-dicom-folder",
        series_path
    ]
    print(commands)

    p = subprocess.Popen(commands, stdout=subprocess.PIPE, shell=True)
    p.communicate()
pass


dcm_info_json_file = args.input
with open(dcm_info_json_file, "rb") as fp:
    contour_info_list = []

    for dcm_info_json in ijson.items(fp, "item"):
        contour_info = ContourInfo(**dcm_info_json)
        if len(contour_info.dcmInfoList) == 0:
            continue
        
        series_data_path = os.path.dirname(contour_info.dcmInfoList[0].filename)
        print(f"convert series {series_data_path}, mask {contour_info.contourFilename} to nrrd")
        do_dcm2nrrd(os.path.dirname(contour_info.contourFilename), series_data_path)

    pass

pass
