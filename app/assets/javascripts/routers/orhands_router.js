Orhands.Routers.Orhands = Backbone.Router.extend({
  initialize: function(options) {
    this.$main = options.$main;
  },

  routes: {
    "": "root",
    
  },

  root: function() {
    //var root = new Orhands.Views.Root({});

    //this._swapView(root);
  },

  _swapView: function(view) {
    this.renderActivities();
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$main.html(view.render().$el);
    //call the afterSwap callback only if view implements it
    view.afterSwap && view.afterSwap();
  }
});
