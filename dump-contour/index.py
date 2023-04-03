"""
Dump contour png file from json that contains contour and DICOM files pair
dcm to contour tutorial from: "https://github.com/KeremTurgutlu/dicom-contour/blob/master/RT2MASK.ipynb"
"""

import os
import argparse
import json
from dcminfo import ContourInfo, DcmInfo
import pydicom as dicom
import numpy as np
from PIL import Image
from collections import defaultdict
import ijson

# create empty dict for
img_contours_dict = defaultdict(int)
img_dict = defaultdict(int)


def get_usable_contour_indices(contour_dataset):

    indices = []

    structure_set_roi_seq = contour_dataset.StructureSetROISequence
    for index, structure_set_roi in enumerate(structure_set_roi_seq):

        if structure_set_roi.ROIName is not None and "skull" not in str(structure_set_roi.ROIName).lower():
            indices.append(index)
        pass

    pass

    return indices


pass


def get_roi_contour_ds(rt_sequence, index):
    """
    Extract desired ROI contour datasets
    from RT Sequence.

    E.g. rt_sequence can have contours for different parts of the brain 
    such as ventricles, tumor, etc...

    You can use get_roi_names to find which index to use

    Inputs:
        rt_sequence (dicom.dataset.FileDataset): Contour file dataset, what you get 
                                                 after reading contour DICOM file
        index (int): Index for ROI Sequence
    Return:
        contours (list): list of ROI contour dicom.dataset.Dataset s
    """
    # index 0 means that we are getting RTV information
    if index >= len(rt_sequence.ROIContourSequence): 
        return None
    pass

    ROI = rt_sequence.ROIContourSequence[index]
    # get contour datasets in a list
    contours = [contour for contour in ROI.ContourSequence]
    return contours


pass


def contour2poly(contour_dataset, dcm_info: DcmInfo):
    """
    Given a contour dataset (a DICOM class) and path that has .dcm files of
    corresponding images return polygon coordinates for the contours.

    Inputs
        contour_dataset (dicom.dataset.Dataset) : DICOM dataset class that is identified as
                         (3006, 0016)  Contour Image Sequence
        contour_info (ContourInfo): contour's dicom pairs

    Return:
        pixel_coords (list): list of tuples having pixel coordinates
        img_ID (id): DICOM image id which maps input contour dataset
        img_shape (tuple): DICOM image shape - height, width
    """

    contour_coord = contour_dataset.ContourData
    reference_sop_instance_uid = contour_dataset.ContourImageSequence[
        0].ReferencedSOPInstanceUID

    if dcm_info.sopInstanceUID != reference_sop_instance_uid:
        return None, None
    # x, y, z coordinates of the contour in mm
    coord = []
    for i in range(0, len(contour_coord), 3):
        coord.append(
            (contour_coord[i], contour_coord[i + 1], contour_coord[i + 2]))

    # extract the image id corresponding to given contour
    # read that dicom file
    img = dicom.read_file(dcm_info.filename)
    img_arr = img.pixel_array
    img_shape = img_arr.shape

    # physical distance between the center of each pixel
    x_spacing, y_spacing = float(
        img.PixelSpacing[0]), float(img.PixelSpacing[1])

    # this is the center of the upper left voxel
    origin_x, origin_y, _ = img.ImagePositionPatient

    # y, x is how it's mapped
    pixel_coords = [(np.ceil((x - origin_x) / x_spacing),
                     np.ceil((y - origin_y) / y_spacing)) for x, y, _ in coord]

    return pixel_coords, img_shape


pass


def poly_to_mask(polygon, width, height):
    from PIL import Image, ImageDraw

    """Convert polygon to mask
    :param polygon: list of pairs of x, y coords [(x1, y1), (x2, y2), ...]
     in units of pixels
    :param width: scalar image width
    :param height: scalar image height
    :return: Boolean mask of shape (height, width)
    """

    # http://stackoverflow.com/a/3732128/1410871
    img = Image.new(mode='L', size=(width, height), color=0)
    ImageDraw.Draw(img).polygon(xy=polygon, outline=0, fill=255)
    mask = np.array(img)
    return mask


pass


def save_masks_to_list(contour_datasets, dcm_info: DcmInfo, index: int):
    """
    Inputs:
        contour_datasets (list): list of dicom.dataset.Dataset for contours
        dcm_info (DcmInfo): contour's dicom info

    """

    for cdataset in contour_datasets:
        coords, shape = contour2poly(cdataset, dcm_info)
        if coords is not None:
            mask = poly_to_mask(coords, *shape)
            image = Image.fromarray(mask)
            if not isinstance(img_contours_dict[dcm_info.sopInstanceUID], dict):
                img_contours_dict[dcm_info.sopInstanceUID] = {
                    "filename": dcm_info.filename,
                    "image": []
                }
            pass

            # img_contours_dict[dcm_info.sopInstanceUID]["image"].append(image)
            mask_file_name = dcm_info.filename + "-mask.png"
            if os.path.exists(mask_file_name):
                print(f"overlap original image {mask_file_name}")
                ori_image = Image.open(mask_file_name)
                ori_image.paste(image, (0, 0), image)
                ori_image.save(mask_file_name)
            else:
                image.save(mask_file_name)
            pass


pass

def dump_non_contour(non_contour_dcm_info):

    # extract the image id corresponding to given contour
    # read that dicom file
    ds = dicom.read_file(non_contour_dcm_info.filename)
    img_arr = ds.pixel_array
    img_shape = img_arr.shape

    img_black = Image.new(mode='L', size=(img_shape), color=0)

    mask_file_name = non_contour_dcm_info.filename + "-mask.png"
    img_black.save(mask_file_name)

    img_dict[non_contour_dcm_info.sopInstanceUID] = {
        "image": non_contour_dcm_info.filename.replace(".dcm", ".png"),
        "mask": mask_file_name
    }


pass

def save_current_contour_mask(contour_dataset, usable_contour_indices):
    for usable_contour_index in usable_contour_indices:
        roi_contour_ds = get_roi_contour_ds(
            contour_dataset, usable_contour_index)
        
        if roi_contour_ds is None:
            continue
        pass

        for dcm_info in contour_info.dcmInfoList:
            save_masks_to_list(roi_contour_ds, dcm_info, usable_contour_index)
        pass

    pass
pass



parser = argparse.ArgumentParser(prog="ContourDumper",
                                 description="Dump contour of dicom files")

parser.add_argument("-i", "--input", type=str, required=True, help="have contour json file")
parser.add_argument("-nf", "--non-file", type=str, required=True, help="Non contour json file")


args = parser.parse_args()

dcm_info_json_file = args.input
non_contour_dcm_json_file = args.non_file
with open(dcm_info_json_file, "rb") as fp:
    contour_info_list = []

    for dcm_info_json in ijson.items(fp, "item"):
        contour_info = ContourInfo(**dcm_info_json)

        contour_dataset = dicom.read_file(contour_info.contourFilename)
        usable_contour_indices = get_usable_contour_indices(contour_dataset)

        print(f"save current contour mask to dict {contour_info.contourFilename}")
        save_current_contour_mask(contour_dataset, usable_contour_indices)



    pass


pass

with open(non_contour_dcm_json_file, "rb") as fp:
    for non_contour_dcm_info_json in ijson.items(fp, "item"):
        non_contour_dcm_info = DcmInfo(**non_contour_dcm_info_json)
        print(f"create non contour png {non_contour_dcm_info.filename}")
        dump_non_contour(non_contour_dcm_info)
    pass
pass

with open("dataset.json", "w") as fp:
    json.dump(img_dict, fp=fp, indent=4)
pass
