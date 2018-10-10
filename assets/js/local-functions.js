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

function delete_items(anno_id, api_url){
	var confirmation = confirm("Are you sure you want to delete?");
	if (confirmation == true){
	$.ajax({
		    url: api_url,
		    type: 'DELETE',
		    contentType: 'application/json',
		    data: anno_id,
		    processData: false,
		    async: false,
		    success: function( data, textStatus, jQxhr ){
		    	setTimeout(function(){
		    	alert(anno_id + " Deleted!")
		        location.reload(true)}, 300);
		    },
		    error: function( jqXhr, textStatus, errorThrown ){
		        console.log( errorThrown );
		    }
		});
	} 
}

function create_items(api_url) {
	for(var i =0; i < localStorage.length; i++){
        var key = localStorage.key(i);
        var matches = canvas_regex.exec(key);
        if(matches != null) {
          var canvas = matches[1];
          var fileName = canvas + '.json';
          var fileContent = localStorage.getItem(key);
          var jsonparse = JSON.parse(fileContent);
          jsonparse = {'json':jsonparse, 'key': key}
          $.ajax({
		    url: api_url,
		    dataType: 'json',
		    type: 'POST',
		    contentType: 'application/json',
		    data: JSON.stringify(jsonparse),
		    processData: false,
		    success: function( data, textStatus, jQxhr ){
		        $('#response pre').html( JSON.stringify( data ) );
		    },
		    error: function( jqXhr, textStatus, errorThrown ){
		        console.log( errorThrown );
		    }
		});
 
      }
  }
}