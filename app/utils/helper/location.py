import pandas as pd
import json
import re
from app.utils.constant import Char, FilePath
from app.modules.nlp.service import loaddicchar, standardize_vietnamese_sentence_sign, covert_unicode, preprocess_text, is_valid_vietnam_word, get_center_of_region

uniChars = Char.UNICHARS
unsignChars = Char.UNSIGNCHARS
vowel_table = Char.VOWEL_TABLE
first_char_table = Char.FIRST_CHAR_TABLE
vowel_to_ids = {}
dicchar = loaddicchar()

for i in range(len(vowel_table)):
    for j in range(len(vowel_table[i]) - 1):
        vowel_to_ids[vowel_table[i][j]] = (i, j)

def modify_district_stat():
    district_dict = json.load(
        open(FilePath.CENTER_GEOLOCATION, encoding='utf-8'))
    district_stats = json.load(open(FilePath.DISTRICT_STATS, encoding='utf-8'))

    district_list = list(district_dict.keys())
    district_type_list = []
    district_name_list = []

    for district in district_list:
        district_word_list = district.split(" ")
        district_type_list.append(preprocess_text(district_word_list[0]))
        district_name_list.append(preprocess_text(
            " ".join(district_word_list[1:])))

    modified_district_stats = dict()

    for district_name in list(district_stats.keys()):
        idx = district_name_list.index(district_name)
        district_type = ""
        try:
            district_type = district_type_list[idx]
        except:
            pass

        if district_type != "":
            tmp_district_name = district_type + \
                " " + preprocess_text(district_name)
        modified_district_stats[tmp_district_name] = district_stats[district_name]

    with open(FilePath.MODIFIED_DISTRICT_STATS, 'w',  encoding='utf-8') as outfile:
        json.dump(modified_district_stats, outfile, ensure_ascii=False)


modify_district_stat()
