---
layout: default
title: Using your own images
parent: help.md
weight: 6
---

This application allows for hosting your own images and annotating them. This is really only necessary if there is no URL to the image you would like to annotate. The steps to do this are below.

# Use JPGs
1. Copy image into `_data/custom_images` folder.
2. Go to [{{site.baseurl}}/imageditor]({{site.baseurl}}/imageditor) page. Your new image should be listed.

**Note** High quality images will have slower performance when using the storyboard. This is due to the lack of tiling which IIIF provides. Creating and hosting IIIF images is only an extra couple of steps.

# Creating IIIF images
1. Copy image into `_data/custom_images` folder.
2. Open the `objects.csv` spreadsheet in the `_data` folder.
3. In the `pid` field add the image filename. i.e. `manuscriptpage.jpg` should be entered as `manuscriptpage` in the spreadsheet.
4. Add any other wanted metadata fields. These will show up in the manifest and will display when the info button is clicked. **Note: after this has been run an order, collection, thumbnail, full, and manifest field will be auto generated. These can be ignored and do not need to be filled out when adding new images.**
5. Save and close csv file.
5. open command line and type in following command. *Note: make sure you are in top level of the repository.*

	```
	bundle exec rake wax:derivatives:iiif custom_images
	```
6. Go to [homepage]({{site.baseurl}}). The manifest should be listed in the mirador viewer after the command has finished running.
