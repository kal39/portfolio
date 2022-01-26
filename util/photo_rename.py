import os
from PIL import Image

def get_date_taken(path):
	return "-".join(Image.open(path)._getexif()[36867].replace(":", " ").split()[0:6])

newFileNames = []

for fileName in os.listdir("assets/photos/"):
	fileName = "assets/photos/" + fileName
	newFileNames.append((fileName, "assets/photos/" + get_date_taken(fileName) + ".jpeg"))

for pair in newFileNames:
	# os.rename(pair[0], pair[1])
	print(pair)
