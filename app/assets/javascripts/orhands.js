window.Orhands = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    
  }
};

$(document).ready(function(){
  $(".search-input").on("focus", function() {
    $(this).css("width", "400px");
  });

  $(".search-input").on("focusout", function() {
    $(this).css("width", "200px");
  });
});
