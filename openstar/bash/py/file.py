#!/usr/bin/env python 2.x
# -*- coding: utf-8 -*-
# version = 1.0

import os


class ScanFile(object):
    def __init__(self, directory, prefix=None, postfix=None):
        self.directory = directory
        self.prefix = prefix
        self.postfix = postfix
        self.files_list = []
        self.dir_list = []

    def scan(self):
        for dirpath, dirnames, filenames in os.walk(self.directory):
            '''''
            dirpath is a string, the path to the directory.
            dirnames is a list of the names of the subdirectories in dirpath (excluding '.' and '..').
            filenames is a list of the names of the non-directory files in dirpath.
            '''
            self.dir_list.append(dirpath)
            for special_file in filenames:
                if self.postfix:
                    if special_file.endswith(self.postfix):
                        self.files_list.append(os.path.join(dirpath, special_file))
                elif self.prefix:
                    if special_file.startswith(self.prefix):
                        self.files_list.append(os.path.join(dirpath, special_file))
                else:
                    self.files_list.append(os.path.join(dirpath, special_file))

        return self.dir_list, self.files_list


if __name__ == "__main__":
    dir = u"D:\\360Downloads"
    scan = ScanFile(dir, None, '.ini')
    subdirs, files = scan.scan()

    print("subdirs len:" + str(len(subdirs)) + "\nfiles len:" + str(len(files)))
    print("The subdirs scaned are:")
    for subdir in subdirs:
        print(subdir)
        print("The files scaned are:")
    for file in files:
        print(file)
