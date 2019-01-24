---
layout: page
title: Create Annotations
---

IMPORTANT! Do not forget to click the <button type="button" id="anno_button" disabled style="display: inline-block">Load All Annotations</button> button when you are done annotating. You can switch between different objects, using the "<i class="fas fa-sync-alt"></i> Replace Object" and will not lose any annotations. The button does need to clicked before navigating to another page.

Annotations can be viewed and created by toggling the <i class="fa fa-comments" aria-hidden="true"></i> button on the top left of the viewer.

New objects can be loaded by hovering over <i class="fa fa-th-large fa-lg fa-fw"></i> and choosing "<i class="fas fa-sync-alt"></i> Replace Object" and putting the url to the manifest in the "Add new object from URL" input box (i.e. https://d.lib.ncsu.edu/collections/catalog/0052574/manifest.json)

{% include iiif_presentation.html %}

{% include annotation_to_json.html %}
