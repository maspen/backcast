var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    
    new SearchView({
      el: this.$('.search')
    }).render();
    
    new VideoPlayerView({
      el: this.$('.player')
    }).render();

    new VideoListView({
      el: this.$('.list')
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});