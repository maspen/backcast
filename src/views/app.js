var AppView = Backbone.View.extend({

  
  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
console.log('AppView this.videos ' + JSON.stringify(this.videos));    
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
      el: this.$('.list'),
      collection: this.videos
    }).render();

    new VideoListEntryView({
      el: this.$('.video-list'),
      collection: this.videos
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});