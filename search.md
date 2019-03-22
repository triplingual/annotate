---
layout: default
title: Search
---
<form role="search">
<div class="search-control" style="display:none;">
    <input type="search" id="person-serarch" name="query"
           placeholder="Keyword Search"
           aria-label="Search people using keyword">

</div>
</form>


<script src="{{site.baseurl}}/js/index.js"></script>
<script src="{{site.baseurl}}/js/advanced-search.js"></script>
<link rel="stylesheet" type="text/css" href="{{site.baseurl}}/css/advanced-search.css">
<div id="spinner"><i class="fa fa-spinner fa-spin"></i></div>

<div id="header_info"></div>
<div style="float: left; width: 20%; ">
  <div id="facets">
  </div>
</div>
<div style="float: left; width: 80%; display: none; border: 1px solid #ccc" class="all_results">
  <div id="search_results">
    <div id="searchInfo">
      <span id="number_results"></span>
      <span id="sort_by" class="dropdownsort"><label for="sortSelect">Sort By:</label>
        <select id="sortSelect" name="sort" onchange="changeSort(event);">
          <option value="">Relevance</option>
          <option value="atoz">Name</option>
          <option value="born">Birth Year</option>
        </select>
      </span>
    </div>
  </div>
  <ul id="resultslist">
  </ul>
  <div id="pagination"></div>
</div>
<div style="clear:both"><span></span></div>

<script>
window.addEventListener("load", function(){
    loadsearchtemplate()
    $('#spinner').hide()
});
</script>