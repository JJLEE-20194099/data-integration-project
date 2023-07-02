import pickle
import json

class IOReader(object):
    def __init__(self, type_of_file: str, path: str):
        self.type_of_file = type_of_file
        self.path = path

    def read(self):
        if self.type_of_file in ['pk', 'pkl']:
            pkl_file = open(self.path, 'rb')
            label_encoder = pickle.load(pkl_file)
            pkl_file.close()
            return label_encoder

        return json.load(open(self.path, encoding='utf-8'))

    def read_by_key(self, key: str):
        return self.read()[key]







