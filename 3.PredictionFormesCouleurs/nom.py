import os

folderPath= r"D:\DIA\AITOY\1.ProcessingFormes\sketchTestCouleur\data"
fileNumber=1

for filename in os.listdir(folderPath):
    os.rename(folderPath+'\\'+filename, folderPath +'\\'+"cercle"+str(fileNumber)+'.png')
    fileNumber +=1