$(document).ready(function() {
  var numbers = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace("num"),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: [
      { num: "one" },
      { num: "two" },
      { num: "three" },
      { num: "four" },
      { num: "five" },
      { num: "six" },
      { num: "seven" }
    ]
  });

  numbers.initialize();

  $(".div-search .search-input").typeahead({
    hint: true,
    highlight: true
  }, {
    name: "numbers",
    displayKey: "num",
    source: numbers.ttAdapter()
  });
});