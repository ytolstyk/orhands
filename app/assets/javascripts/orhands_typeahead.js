$(document).ready(function() {
  var hospitals = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace("num"),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: "http://localhost:3000/api/hospital_names"
  });

  hospitals.initialize();

  $(".div-search .search-input").typeahead({
    hint: true,
    highlight: true
  }, {
    name: "hospitals",
    displayKey: "name",
    source: hospitals.ttAdapter()
  });
});