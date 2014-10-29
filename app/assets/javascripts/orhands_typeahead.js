$.Searchable = function(selector, options) {
  this.$el = $(selector);
  this.$results = $(options.results);

  this.clearResults();
  this.bindEvents();
};

$.Searchable.prototype.bindEvents = function() {
  this.$el.on("submit", this.onSubmit.bind(this));
  this.$el.on("input", this.onInput.bind(this));
  this.$el.on("focus", this.onFocus.bind(this));
};

$.Searchable.prototype.onSubmit = function(event) {
  event.preventDefault();
};

$.Searchable.prototype.onFocus = function(event) {

};

$.Searchable.prototype.onInput = function(event) {
  var query = event.target.value;
  query = query.replace(/"/g, "").replace(/'/g, "").replace(/\(|\)/g, "");

  if (query.length === 0) {
    this.clearResults();
    return;
  }

  $.ajax({
    url: "/api/hospital_search",
    method: "GET",
    dataType: "json",
    data: { query: query },
    success: this.handleResponse.bind(this)
  });
};

$.Searchable.prototype.handleResponse = function(data) {
  this.clearResults();
  data.forEach(function (result, index) {
    this.results.push(result);
    this.$results.append(this.liFromResult(result));
  }.bind(this));
};

$.Searchable.prototype.liFromResult = function(result) {
  var $li = $("<li class='li-search-result'>");
  var $div = $("<div class='div-search-result'>");
  $div.text(result.address + " " + result.city + ", " + result.state);
  $li.text(result.name);
  $li.append($div);
  return $li;
};

$.Searchable.prototype.clearSearch = function() {
  this.clearResults();
  this.$el.val("");
};

$.Searchable.prototype.clearResults = function() {
  this.results = [];
  this.selectedIndex = 0;
  this.$results.empty();
};

$.fn.searchable = function(options) {
  return this.each(function() {
    new $.Searchable(this, options);
  });
};