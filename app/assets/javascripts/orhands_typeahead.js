$.Searchable = function(selector, options) {
  this.$el = $(selector);
  this.$results = $(options.results);
  this.$input = this.$el.find("input");

  this.clearResults();
  this.bindEvents();
};

$.Searchable.prototype.bindEvents = function() {
  this.$el.on("submit", this.onSubmit.bind(this));
  this.$el.on("input", this.onInput.bind(this));
  this.$input.on("focus", this.onFocus.bind(this));
};

$.Searchable.prototype.onFocus = function(event) {
  var query = event.target.value;
  if (query.length < 1) {
    this.clearResults();
  };
};

$.Searchable.prototype.onSubmit = function(event) {
  event.preventDefault();
};

$.Searchable.prototype.onInput = function(event) {
  var query = event.target.value;
  query = query.replace(/"/g, "").replace(/'/g, "").replace(/\(|\)/g, "");

  if (query.length === 0) {
    this.clearResults();
    return;
  }

  $.ajax({
    url: "/api/searches",
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

  if (data.length < 1) {
    this.$results.append($("<li class='li-search-result'>").text("no results found"));
  }
};

$.Searchable.prototype.liFromResult = function(result) {
  var $a = $("<a href='hospital/" + result.id + "'>");
  var $li = $("<li class='li-search-result'>");
  var $div = $("<div class='div-search-result'>");
  $div.text(result.address + " " + result.city + ", " + result.state);
  $li.append($a.text(result.name));
  $li.append($div);
  return $li;
};

$.Searchable.prototype.clearSearch = function() {
  this.clearResults();
  this.$el.val("");
};

$.Searchable.prototype.clearResults = function() {
  this.results = [];
  this.$results.empty();
};

$.fn.searchable = function(options) {
  return this.each(function() {
    new $.Searchable(this, options);
  });
};