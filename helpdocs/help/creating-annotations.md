---
layout: default
title: Creating Annotations
parent: Help
nav_order: 4
---
* TOC
{:toc}

## Creating Annotations with Mirador
IMPORTANT!!!!! After creating annotations make sure to click on the "Create/Update Annotations" button located in the bottom left hand corner of the Mirador viewer. If this is not done, no annotations will be created or deleted. This only has to be done before navigating away from the create annotations page . It does not have to be done when switching between manifests.

Demo video showing the creation of annotations is below.

- Navigate to the create annotations page. [{{site.url}}{{site.baseurl}}]({{site.url}}{{site.baseurl}})
- To load a new manifest hover on the "Change number of visible slots button"

![visible slots button]({{site.baseurl}}/images/slots_button.png)

- Click on the replace object button

![replace objects]({{site.baseurl}}/images/replace_object.png)

- Load manifest url into new object from url slot

![new manifest]({{site.baseurl}}/images/new_manifest.png)
- Click on the toggle annotations button in the viewer.
- Create annotations using tools provided by IIIF viewer.
- Click on "Create/Update Annotations" button.

<video width="100%" controls>
  <source src="{{site.baseurl}}/assets/videos/createannos.m4v" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

## Creating Annotations on IIIF images without a manifest

- Navigate to the create annotations page. [{{site.url}}{{site.baseurl}}/openseadragon]({{site.url}}{{site.baseurl}}/openseadragon)

- Load info.json url of image using input
- Click on "ADD ANNOTATION" button
- Click and Drag section of image
- Add annotation.
  - Tags should be separated by a comma.
  - Type options are **rect** or **pin** 
- Click save.

<video width="100%" controls>
  <source src="{{site.baseurl}}/assets/videos/osdcreateannos.m4v" type="video/mp4">
  Your browser does not support HTML5 video.
</video>
