import os

def generate_photo_card(title, fileName):
	return """
	<div class="photo-container">
		<div class="photo-title">%s</div>
		<img class="photo" src="assets/photos/%s" alt="photo %s">
	</div>
	""" % (title, fileName, title)

out = "<section class=\"gallery\">"

for fileName in sorted(os.listdir("assets/photos/"), reverse = True):
	out += generate_photo_card("/".join(fileName.split("-")[0:3]), fileName)

out += """
	<div class="background-shade"></div>
	<div class="close-button"><i class="fas fa-times"></i></div>
	<script src="scripts/photos.js"></script>
</section>
"""

f = open("photo_gallery.html", "w")
f.write(out)
# print(out)
f.close()