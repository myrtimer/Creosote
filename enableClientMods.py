import os

workingDir = os.getcwd()
listFile = "clientside mods list (remove when exporting server).txt"
modsFolder = "minecraft/mods"

modList = open(os.path.join(workingDir, listFile)).readlines()
files = os.listdir(os.path.join(workingDir, modsFolder))
modFiles = list(filter(lambda f: os.path.isfile(os.path.join(modsFolder, f)) & f.endswith(".jar.disabled"), files))

for clientMod in modList:
    for modFile in modFiles:
        if clientMod.strip() in modFile:
            os.rename(os.path.join(modsFolder, modFile), os.path.join(modsFolder, modFile.replace(".disabled", "")))
            break
