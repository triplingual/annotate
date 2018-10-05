function load_annotations(ident, annotation){
//var unescape_json = $.parseHTML(annotation)[0].textContent
annotation = annotation.replace("***", "'")
localStorage.setItem(ident, annotation)
console.log(ident)
console.log(localStorage)
}
function make_embed_code(id){
	console.log(id)
	if ($("#" + id + "_embedcode").css("display") == 'none'){
    $("#" + id + "_embedcode").css("display", "block")
    $("#" + id + "_button").html("Hide embed code")
  } else {
      $("#" + id + "_embedcode").css("display", "none")
      $("#" + id + "_button").html("Show embed code")
  }
}

function delete_items(anno_id){
	$.ajax({
		    url: 'http://127.0.0.1:5000/annotations/',
		    type: 'DELETE',
		    contentType: 'application/json',
		    data: anno_id,
		    processData: false,
		    async: false,
		    success: function( data, textStatus, jQxhr ){
		    	alert(anno_id + " Deleted!")
		        location.reload(true);
		    },
		    error: function( jqXhr, textStatus, errorThrown ){
		        console.log( errorThrown );
		    }
		});
}


