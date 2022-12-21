import os
from os import walk
from os import listdir
from os.path import isfile, join

mypath = "D:\WorkspaceCLB\pioneerWebsite\client\public\imgMembers\\"
print(mypath)
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
f = []
for (dirpath, dirnames, filenames) in walk(mypath):
    f.extend(filenames)
    break

# print(onlyfiles)

for i in onlyfiles:
    oldname = mypath + i
    newname = i.lower().replace(' ','-')
    newname = mypath + newname
    os.rename(oldname, newname)
    print(oldname, newname)
    
print('finish')
