---
layout: null
---
var docs = 
{
{% for anno in site.annotation_data %}
"{{anno.slug}}" : {{anno | jsonify}}
{% unless forloop.last %}, {% endunless %}
{% endfor %}
}

var index = lunr(function() {
  this.pipeline.remove(lunr.stemmer);
  this.searchPipeline.remove(lunr.stemmer);
  this.pipeline.remove(lunr.stopWordFilter);
  this.searchPipeline.remove(lunr.stopWordFilter);
  this.tokenizer.separator = /[\s,.;:/?!()]+/;
  for (var l=0; l<lunr_settings['fields'].length; l++){
    this.field(lunr_settings['fields'][l]['searchfield'], {'boost': lunr_settings['fields'][l]['boost']});
    var doc = {}
    for (var j=0; j<anno_data.length; j++){
      for (var k=0; k<lunr_settings['fields'][l]['jekyllfields']; k++){
        console.log(lunr_settings['fields'][l]['jekyllfields'])
          doc[lunr_settings['fields'][l]['searchfield']] = anno_data[j][lunr_settings['fields'][l]['jekyllfields'][k]];
      }
  }
  console.log(doc)
  this.add(doc)
  }
});