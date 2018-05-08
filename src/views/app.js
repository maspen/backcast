var AppView = Backbone.View.extend({

  
  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
  },
  
  // sync: function() {
  //   this.render();
  // },


  render: function() {
    this.$el.html(this.template());
    
    // console.log(this.videos);

    new SearchView({
      el: this.$('.search')
    }).render();
    
    new VideoPlayerView({
      el: this.$('.player'),
      model: this.videos.models[0]
    }).render();

    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    // new VideoListEntryView({
    //   el: this.$('.video-list'),
    //   collection: this.videos
    // }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
