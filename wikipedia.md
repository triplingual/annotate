---
layout: default
title: Wikipedia and IIIF
nav_order: 6
---
# Full info page
More information on each of these subjects can be found here: [https://commons.wikimedia.org/wiki/Commons:International_Image_Interoperability_Framework](https://commons.wikimedia.org/wiki/Commons:International_Image_Interoperability_Framework).

# Wikidata Image annotations and manifests
Images in Wikidata can each have a manifest. They can be loaded in [https://tools.wmflabs.org/wd-image-positions/](https://tools.wmflabs.org/wd-image-positions/). For example the Item ID for this page: [https://www.wikidata.org/wiki/Q328523](https://www.wikidata.org/wiki/Q328523) is Q328523. The property ID should be P18 (this is Wikidata's image property).  The `Preview IIIF` will load the manifest into a Mirador instance. The `IIIF manifest` will be load the manifest and often there is a annotation list which may be empty. An example with annotations is [https://tools.wmflabs.org/wd-image-positions/item/Q1231009](https://tools.wmflabs.org/wd-image-positions/item/Q1231009). Here is the link to the manifest: [https://tools.wmflabs.org/wd-image-positions/iiif/Q1231009/P18/manifest.json](https://tools.wmflabs.org/wd-image-positions/iiif/Q1231009/P18/manifest.json).

# Wikipedia Commons images
In addition to images hosted on IIIF servers, Wikipedia Commons images can be loaded into a IIIF format using a static url. The Wikipedia Commons image filename is loaded into the URL below and the IIIF image will render.

```
https://tools.wmflabs.org/zoomviewer/proxy.php?iiif={image filename}/full/full/0/default.jpg
https://tools.wmflabs.org/zoomviewer/proxy.php?iiif={image filename}/info.json
```

## Examples
[https://tools.wmflabs.org/zoomviewer/proxy.php?iiif=Godward_Idleness_1900.jpg/full/full/0/default.jpg](https://tools.wmflabs.org/zoomviewer/proxy.php?iiif=Godward_Idleness_1900.jpg/full/full/0/default.jpg)

[https://tools.wmflabs.org/zoomviewer/proxy.php?iiif=The_Garden_of_Earthly_Delights_by_Bosch_High_Resolution.jpg/info.json](https://tools.wmflabs.org/zoomviewer/proxy.php?iiif=The_Garden_of_Earthly_Delights_by_Bosch_High_Resolution.jpg/info.json)

# Wikidata with IIIF manifests
Additionally a number of Wikidata entries have a manifest listed in the entry. This [Wikidata query link](https://query.wikidata.org/#%23artworks%20on%20Wikidata%20which%20link%20to%20IIIF%20manifests%0ASELECT%20%3Fitem%20%3FitemLabel%20%3Fcollection%20%3FcollectionLabel%20%3Fiiif_manifest%20%3Fcreator%20%3FcreatorLabel%20%3Finception%20WHERE%20%7B%0A%20%20%3Fitem%20wdt%3AP6108%20%3Fiiif_manifest.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%20%20OPTIONAL%20%7B%20%3Fitem%20wdt%3AP195%20%3Fcollection.%20%7D%0A%20%20OPTIONAL%20%7B%20%3Fitem%20wdt%3AP170%20%3Fcreator.%20%7D%0A%20%20OPTIONAL%20%7B%20%3Fitem%20wdt%3AP571%20%3Finception.%20%7D%0A%7D) provides the framework for viewing all Wikidata that links to a manifest. In order to view the results click on the play symbol. It does take a minute to load.
