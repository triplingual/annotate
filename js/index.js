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
var lunr_settings = {{site.lunr_settings| jsonify}}

var view_facets = "{{site.view_facets}}"

var baseurl = "{{site.baseurl}}"

var liveidx = lunr(function() {
   this.pipeline.remove(lunr.stemmer);
  this.searchPipeline.remove(lunr.stemmer);
  this.pipeline.remove(lunr.stopWordFilter);
  this.searchPipeline.remove(lunr.stopWordFilter);
  this.tokenizer.separator = /[\s,.;:/?!()]+/;
  for (var l=0; l<lunr_settings['fields'].length; l++){
    this.field(lunr_settings['fields'][l]['searchfield'], {'boost': lunr_settings['fields'][l]['boost']}); 	
  }
   {% for anno in site.annotation_data %}
    	var doc = {"id": "{{anno['slug']}}", "content": "{{anno['content'] | strip_html| escape | strip_newlines}}", "tags": "{{anno['tags'] | join: ' ' | strip_html}}"}
  	  	this.add(doc)
  	{% endfor %}  
});

var index = JSON.stringify(liveidx);

