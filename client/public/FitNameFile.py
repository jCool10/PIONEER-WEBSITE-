from os import walk
from os import listdir
from os.path import isfile, join

mypath = 'imgMembers/'
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
f = []
for (dirpath, dirnames, filenames) in walk(mypath):
    f.extend(filenames)
    break

for i in f:
    i = i.lower()
    i = i.replace(' ','-')
    print(i)