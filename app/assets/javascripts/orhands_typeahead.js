$(document).ready(function() {
  var hospitals = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace("name"),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: "api/hospital_names"
  });

  hospitals.initialize();

  $(".search-input").typeahead({
    hint: true,
    highlight: true
  }, {
    name: "hospitals",
    displayKey: "name",
    source: hospitals.ttAdapter()
  });
});
