window.Orhands = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    
  }
};

$(document).ready(function(){
  var $searchBox = $(".search-input");

  $searchBox.on("focus", function() {
    $(this).css("width", "300px");
  });

  $searchBox.on("focusout", function() {
    $(this).css("width", "200px");
  });
});
