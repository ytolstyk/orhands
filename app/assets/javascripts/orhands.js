window.Orhands = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Orhands.Routers.Orhands({
      $main: $("#main")
    });

    Backbone.history.start();
  }
};

$(function() {
  var $searchBox = $(".search-input");
  var $formSearch = $(".form-search");

  $searchBox.on("focus", function() {
    $(this).css("width", "250px");
  });

  $searchBox.on("focusout", function() {
    $(this).css("width", "200px");
  });

  $formSearch.searchable({
    results: "#search-results",
    url: "/api/searches"
  });

});
