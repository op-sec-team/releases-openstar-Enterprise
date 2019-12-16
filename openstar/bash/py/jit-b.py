#!/usr/bin/env python 2.x
# -*- coding:utf-8 -*-
# version = 1.4

import file
import os

jit = "/opt/openresty/luajit/bin/luajit"
path = "/opt/openresty/openstar"
ExcludePath = []
ExcludePath.append("/opt/openresty/openstar/lib/plugin/")
ExcludeFile = []
#ExcludeFile.append("/opt/openresty/openstar/lib/xx.lua")

scan = file.ScanFile(path,None,'.lua')
subdirs,files = scan.scan()

for file in files:
    for p in ExcludePath:
        if file.startswith(p):
            ExcludeFile.append(file)
            print("PATH:\t"+file)

for file in files:
    if file in ExcludeFile:
        pass
    else:
        cmd = jit + ' -b ' + file + ' ' + file
        print(cmd)
        os.system(cmd)
