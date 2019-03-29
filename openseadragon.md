---
layout: default
title: Create annotations on IIIF images without a manifest
---

<form id="enteriiifitem" style="padding-bottom: 20px">
<input style="width:100%" type="text" name="iiifurl" id="iiifurl" placeholder="Load image, should be info.json link">
</form>
<script src="https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.4.0/openseadragon.min.js"></script><script src="https://annotorious.github.io/latest/annotorious.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://annotorious.github.io/css/style.css">
<link rel="stylesheet" type="text/css" href="https://annotorious.github.io/latest/themes/dark/annotorious-dark.css">
<div id="viewer" style="display:none">
<div id="openseadragon" style="height: 100vh; position: relative;" class="viewer"></div>
<button id="map-annotate-button" onclick="anno.activateSelector();" href="#">
  ADD ANNOTATION
</button>
</div>

<script>
document.getElementById("enteriiifitem").onsubmit= function() {
  localStorage.setItem('osviewer', document.getElementById("iiifurl").value);
  location.reload();
  loadanno();
  return false;
}
document.getElementById("viewer").addEventListener("load", loadanno());

function loadanno() {
var tilesource = localStorage['osviewer'] ? localStorage['osviewer'] : 'https://repository.duke.edu/iipsrv/iipsrv.fcgi?IIIF=/srv/perkins/repo_deriv/multires_image/40/58/a6/28/4058a628-c593-463e-9736-8a821e178fee/info.json';
document.getElementById('viewer').style.display = 'block';
var viewer = OpenSeadragon({
  id: "openseadragon",
  prefixUrl: "https://annotorious.github.io/js/openseadragon/images/",
  showNavigator: false,
  sequenceMode: true,
  tileSources: [
    tilesource
    ]
});
anno.makeAnnotatable(viewer);
var matching = {}
viewer.addHandler('open', function(){
  var all_annos = []
{% for annotation in site.annotations %}
  var annotation = JSON.parse({{annotation.content | jsonify}})
  if (annotation['@context'].indexOf('w3') > -1 && annotation.target && tilesource.indexOf(annotation.target.id.split("#xywh=")[0]) > -1){
    all_annos.push(annotation)
    var xywh = annotation.target.id.split("#xywh=").slice(-1)[0].split(",");
    var bounds = viewer.viewport.getBounds(true);
    var currentRect = viewer.viewport.viewportToImageRectangle(bounds);
    var cords = viewer.world.getItemAt(0).imageToViewportRectangle(parseFloat(xywh[0]), parseFloat(xywh[1]), parseFloat(xywh[2]), parseFloat(xywh[3]))
    var id = xywh.map(function (x) {
      return parseInt(x);
    });
    matching[id.join(",")] = "{{annotation.slug}}"
    var loadanno = {}
    loadanno['src'] = 'dzi://openseadragon/something'
    loadanno['text'] = annotation['body']['value'];
    loadanno['shapes'] = [{"type": "rect", "geometry": cords}]
    anno.addAnnotation(loadanno)
  }
{% endfor %}
  localStorage.setItem(tilesource, JSON.stringify(all_annos))
});
anno.addHandler('onAnnotationCreated', function(annotation) {
    var annotation_text = buildAnno(annotation, tilesource)
if (localStorage[tilesource]) {
  var existing = JSON.parse(localStorage[tilesource])
  annotation_text = _.uniq(existing.concat(annotation_text))
}
localStorage.setItem(tilesource, JSON.stringify(annotation_text))
create_items('{{site.api_server}}', '{{site.url}}{{site.baseurl}}')

});

anno.addHandler('onAnnotationUpdated', function(annotation) {
    var annotation_text = buildAnno(annotation, tilesource)
    var existing = JSON.parse(localStorage[tilesource])
    var id = annotation_text[0].target.id.split("#xywh=").slice(-1)[0].split(",").map(function (x) {
      return parseInt(x);
    });
    var position = parseInt(matching[id.join(",")].split("-").slice(-1)[0]) - 1;
    existing[position] = annotation_text[0];
    localStorage.setItem(tilesource, JSON.stringify(existing))
    create_items('{{site.api_server}}', '{{site.url}}{{site.baseurl}}')
});

anno.addHandler('onAnnotationRemoved', function(annotation) {
  var annotation_text = buildAnno(annotation, tilesource)
  var existing = JSON.parse(localStorage[tilesource])
  var id = annotation_text[0].target.id.split("#xywh=").slice(-1)[0].split(",").map(function (x) {
    return parseInt(x);
  });
  var position = parseInt(matching[id.join(",")].split("-").slice(-1)[0]) - 1;
  existing.splice(position, 1)
  localStorage.setItem(tilesource, JSON.stringify(existing))
  create_items('{{site.api_server}}', '{{site.url}}{{site.baseurl}}')
});

function buildAnno(annotation, tilesource){
  var boundingrect = annotorious['geometry'].getBoundingRect(annotation.shapes[0]).geometry
  var rect =  new OpenSeadragon.Rect(boundingrect['x'], boundingrect['y'], boundingrect['width'], boundingrect['height'])
  var imageitems = viewer.viewport.viewportToImageRectangle(rect)
  var targetid = tilesource.replace("/info.json", "") + `#xywh=${imageitems['x']},${imageitems['y']},${imageitems['width']},${imageitems['height']}`
  var annotation = [{
"type": "Annotation",
"@context": "http://www.w3.org/ns/anno.jsonld",
"body": {
  "value": `${annotation.text}`,
  "type": "TextualBody",
  "format": "text/html"
},
"target": {
  "id": `${targetid}`,
  "type": "Canvas"
}
}]
return annotation
}
}
</script>
<style>
      #map-annotate-button {
        position:relative;
        bottom:100vh;
        float: right;
        right: 10px;
        margin-top: 15px;
        background-color:#000;
        color:#fff;
        padding:3px 8px;
        z-index:10000;
        font-size:11px;
        text-decoration:none;
      }
</style>
