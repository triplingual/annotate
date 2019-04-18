---
layout: default
title: Create annotations on IIIF images without a manifest
nav_order: 2
---
<form id="enteriiifitem" style="padding-bottom: 20px">
<input style="width:100%" type="text" name="iiifurl" id="iiifurl" placeholder="Load image, should be info.json link">
</form>
<p><b>Example images from other institutions</b></p>
<a onclick="localStorage.setItem('osviewer', 'https://repository.duke.edu/iipsrv/iipsrv.fcgi?IIIF=/srv/perkins/repo_deriv/multires_image/40/58/a6/28/4058a628-c593-463e-9736-8a821e178fee/info.json'); location.reload()">https://repository.duke.edu/iipsrv/iipsrv.fcgi?IIIF=/srv/perkins/repo_deriv/multires_image/40/58/a6/28/4058a628-c593-463e-9736-8a821e178fee/info.json</a><br>
<a onclick="localStorage.setItem('osviewer', 'https://libimages.princeton.edu/loris/pudl0076/map_pownall/00000001.jp2/info.json'); location.reload()">https://libimages.princeton.edu/loris/pudl0076/map_pownall/00000001.jp2/info.json</a><br>
<a onclick="localStorage.setItem('osviewer', 'https://dlcs.io/iiif-img/3/2/04fbbb28-d5a7-4408-b7da-800c4e65eda3/info.json'); location.reload()">https://dlcs.io/iiif-img/3/2/04fbbb28-d5a7-4408-b7da-800c4e65eda3/info.json</a><br>
<a onclick="localStorage.setItem('osviewer', 'https://cdm16028.contentdm.oclc.org/digital/iiif/p16028coll4/35582/info.json'); location.reload()">https://cdm16028.contentdm.oclc.org/digital/iiif/p16028coll4/35582/info.json</a><br>
<a onclick="localStorage.setItem('osviewer', 'https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000004.jp2/info.json'); location.reload()">https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000004.jp2/info.json</a><br>

<script src="https://annotorious.github.io/js/openseadragon/openseadragon.min.js"></script>
<script src="https://annotorious.github.io/latest/annotorious.min.js"></script>
<script src="https://annotorious.github.io/js/highlight.js"></script>
<script type="text/javascript" src="https://annotorious.github.io/latest/anno-fancybox.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://annotorious.github.io/latest/themes/dark/annotorious-dark.css">
<div id="openseadragon" class="viewer"></div>
<button id="map-annotate-button" onclick="anno.activateSelector();" href="#">
  ADD ANNOTATION
</button>

<script>
document.getElementById("enteriiifitem").onsubmit= function() {
  localStorage.setItem('osviewer', document.getElementById("iiifurl").value);
  location.reload();
  return false;
}

document.getElementById("openseadragon").addEventListener("load", getUrl());
function heighwidth (tilesource) {
  $.ajax({
    type : "get",
    url : tilesource,
    success : function(data) {
      var height = data['height'];
      var width = data['width'];
      loadanno(tilesource, height, width)
    }
  });
}

function getUrl() {
  var tilesource = localStorage['osviewer'] ? localStorage['osviewer'] : 'https://repository.duke.edu/iipsrv/iipsrv.fcgi?IIIF=/srv/perkins/repo_deriv/multires_image/40/58/a6/28/4058a628-c593-463e-9736-8a821e178fee/info.json';
  heighwidth(tilesource)
}

function loadanno(tilesource, height, width) {
  var baseurl = tilesource.split("/info.json")[0]
  var aspect_ratio = width/height;
  var tilesources = {
    type: 'legacy-image-pyramid',
    levels: [{
      url: `${baseurl}/full/full/0/default.jpg`,
      height: height,
      width: width
    }]
  }
  var viewer = OpenSeadragon({
    id: "openseadragon",
    prefixUrl: "https://annotorious.github.io/js/openseadragon/images/",
    showNavigator: false,
    tileSources: tilesources
  });
  anno.makeAnnotatable(viewer);
  annotorious.plugin.addTags = function() { }
  annotorious.plugin.addTags.prototype.onInitAnnotator = function(annotator) {
    annotator.editor.addField(function(annotation) {
      var tags = annotation ? annotation.tags : '';
      return 'Tags: <input type="text" name="tags" id="tags" value="' + tags + '">'
    });
    annotator.popup.addField(function(annotation) {
      return '<em style="color: white">Tags: ' + annotation.tags + '</em>';
    })
  }
  anno.addPlugin('addTags', {});
    annotorious.plugin.selectType = function() { }
    annotorious.plugin.selectType.prototype.onInitAnnotator = function(annotator) {
      annotator.editor.addField(function(annotation) {
        var shapetype = annotation ? annotation.shapetype : 'rect';
        return 'Type: <input type="text" name="shapetype" id="shapetype" value="' + shapetype + '">'
      });
      annotator.popup.addField(function(annotation) {
        return '<em style="color: white">Type: ' + annotation.shapetype + '</em>';
      })
  }
  anno.addPlugin('selectType', {});
  annotorious.plugin.addAuthor = function() { }
  annotorious.plugin.addAuthor.prototype.onInitAnnotator = function(annotator) {
    annotator.editor.addField(function(annotation) {
      var author = annotation ? annotation.author : '';
      return 'Author: <input type="text" name="author" id="author" value="' + author + '">'
    });
    annotator.popup.addField(function(annotation) {
      return '<em style="color: white">Author: ' + annotation.author + '</em>';
    })
  }
  anno.addPlugin('addAuthor', {});
  var matching = {}
  anno.showAnnotations(viewer)
  viewer.addHandler('open', function(){
    var all_annos = []
    var annotations = {{site.annotations | jsonify}}
    var currentannos = annotations.filter(element => tilesource.indexOf(element.slug.split("-")[0]) > -1)
    for (var ca=0; ca<currentannos.length; ca++) {
      var annotation = JSON.parse(currentannos[ca]['content'])
      if (annotation['@context'].indexOf('w3') > -1 && annotation.target && tilesource.indexOf(annotation.target.id.split("#xywh=")[0]) > -1){
        all_annos.push(annotation)
        var xywh = annotation.target.id.split("#xywh=").slice(-1)[0].split(",");
        var cords = viewer.viewport.imageToViewportRectangle(xywh[0], xywh[1], xywh[2], xywh[3]);
        var id = `${cords['x'].toFixed(2)}${cords['y'].toFixed(2)}${cords['width'].toFixed(2)}${cords['height'].toFixed(2)}`
        matching[id] = "{{annotation.slug}}"
        var loadanno = {}
        loadanno['src'] = 'dzi://openseadragon/something'
        body = Array.isArray(annotation['body']) ? annotation['body'] : [annotation['body']];
        var tags = []
        for (var jar=0; jar<body.length; jar++){
          if(body[jar]['purpose'] != 'tagging'){
            loadanno['text'] = body[jar]['value'];
            loadanno['shapetype'] = body[jar]['selector'] ? body[jar]['selector']['value'] : 'rect';
          } else {
            tags.push(body[jar]['value'])
          }
        }
        loadanno['shapes'] = [{"type": "rect", "geometry": cords}]
        loadanno['tags'] = tags.join(", ");
        var creator = annotation.creator ? annotation.creator.join(", ") : "";
        loadanno['author'] = creator;
        anno.addAnnotation(loadanno)
      }
    }
    localStorage.setItem(tilesource, JSON.stringify(all_annos))
  });

  anno.addHandler('onAnnotationCreated', function(annotation) {
    var annotation_text = buildAnno(annotation, tilesource)
    var id = `${annotation['shapes'][0]['geometry']['x'].toFixed(2)}${annotation['shapes'][0]['geometry']['y'].toFixed(2)}${annotation['shapes'][0]['geometry']['width'].toFixed(2)}${annotation['shapes'][0]['geometry']['height'].toFixed(2)}`;
    if (localStorage[tilesource]) {
      var existing = JSON.parse(localStorage[tilesource])
      annotation_text = _.uniq(existing.concat(annotation_text))
    }
    matching[id] = baseurl.split("/").slice(-1)[0] + '-' + annotation_text.length;
    localStorage.setItem(tilesource, JSON.stringify(annotation_text))
    create_items('{{site.api_server}}', '{{site.url}}{{site.baseurl}}')
  });

  anno.addHandler('onAnnotationUpdated', function(annotation) {
    var annotation_text = buildAnno(annotation, tilesource)
    var existing = JSON.parse(localStorage[tilesource])
    var id = `${annotation['shapes'][0]['geometry']['x'].toFixed(2)}${annotation['shapes'][0]['geometry']['y'].toFixed(2)}${annotation['shapes'][0]['geometry']['width'].toFixed(2)}${annotation['shapes'][0]['geometry']['height'].toFixed(2)}`;
    var position = parseInt(matching[id].split("-").slice(-1)[0]) - 1;
    existing[position] = annotation_text[0];
    localStorage.setItem(tilesource, JSON.stringify(existing))
    create_items('{{site.api_server}}', '{{site.url}}{{site.baseurl}}')
  });

  anno.addHandler('onAnnotationRemoved', function(annotation) {
    var annotation_text = buildAnno(annotation, tilesource)
    var existing = JSON.parse(localStorage[tilesource])
    var id = `${annotation['shapes'][0]['geometry']['x'].toFixed(2)}${annotation['shapes'][0]['geometry']['y'].toFixed(2)}${annotation['shapes'][0]['geometry']['width'].toFixed(2)}${annotation['shapes'][0]['geometry']['height'].toFixed(2)}`;
    var position = parseInt(matching[id].split("-").slice(-1)[0]) - 1;
    existing.splice(position, 1)
    anno.removeAnnotation(annotation)
    var delete_list = existing.length == 0 ? true : false;
    if (existing.length == 0){
      localStorage.removeItem(tilesource)
    } else {
      localStorage.setItem(tilesource, JSON.stringify(existing))
    }
    create_items('{{site.api_server}}', '{{site.url}}{{site.baseurl}}')
    delete_items(`${baseurl.split("/").slice(-1)[0]}-${existing.length+1}`, '{{site.api_server}}', delete_list)
  });

  function buildAnno(annotation, tilesource){
    var boundingrect = annotorious['geometry'].getBoundingRect(annotation.shapes[0]).geometry
    var tags = getTags()
    var rect =  new OpenSeadragon.Rect(boundingrect['x'], boundingrect['y'], boundingrect['width'], boundingrect['height'])
    var imageitems = viewer.viewport.viewportToImageRectangle(rect)
    var targetid = baseurl + `#xywh=${parseInt(imageitems['x'])},${parseInt(imageitems['y'])},${parseInt(imageitems['width'])},${parseInt(imageitems['height'])}`
    var shape_type = document.getElementById("shapetype") ? document.getElementById("shapetype").value : "";
    var popuptags = document.getElementById("tags") ? document.getElementById("tags").value : "";
    var author = document.getElementById("author") ? document.getElementById("author").value.split(",") : "";
    author = author.map(element=>element.trim())
    annotation['shapetype'] = shape_type;
    annotation['tags'] = popuptags;
    annotation['author'] = author;
    var annotation_data = annotation.text;
    var body = [{
      "value": `${annotation_data}`,
      "type": "TextualBody",
      "format": "text/html",
      "selector": {
        "type": "FragmentSelector",
        "value": `${shape_type}`
      }
    }]
    body = body.concat(tags)
    var annotation = [{
      "type": "Annotation",
      "@context": "http://www.w3.org/ns/anno.jsonld",
      "creator" : author,
      "body": body,
      "target": {
        "id": `${targetid}`,
        "type": "Image"
      }
    }]
    return annotation
  }
}
function getTags() {
  var tagging_json = [];
  if(document.getElementById("tags")){
    var tags =  document.getElementById("tags").value.split(",")
    for (var i=0; i<tags.length; i++){
      if (tags[i].trim()){
        tagging_json.push({
          "value": tags[i].trim(),
          "type": "TextualBody",
          "purpose": "tagging",
          "format": "text/plain"
        })
      }
    }
  }
  return tagging_json;
}
</script>
<style>
  #openseadragon {
    height: 55em;
    width: 93%;
    position: absolute;
  }

  #map-annotate-button {
    position:absolute;
    right: 0;
    margin: 10px;
    margin-right: calc(6%);
    background-color:#000;
    color:#fff;
    padding:3px 8px;
    z-index:10000;
    font-size:11px;
    text-decoration:none;
  }
</style>
