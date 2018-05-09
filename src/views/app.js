var AppView = Backbone.View.extend({

  
  el: '#app',
  search: '',
  // Backbone.Model.definitions = {},

  initialize: function() {
    // * create the collection
    // collection = new Videos();
    
    // maybe want to do a service call to pre-populate
    //    collection w/ some data so can pass that to the
    //    components to be rendered; so that they show something
    //    on the screen
    //    Q: would have to trigger a search w/ parameters
    
    // * resetting the collection: collection.reset()

    this.videos = new Videos(exampleVideoData);
    this.render();
  },
  
  // sync: function() {
  //   this.render();
  // },


  render: function() {
    this.$el.html(this.template());
    
    // console.log('this.videos', this.videos);

    this.search = new SearchView({
      el: this.$('.search'),
      collection: this.videos
    }).render();
    
    this.videoPlayerView = new VideoPlayerView({
      el: this.$('.player'),
      model: this.videos.models[0]
    }).render();

    this.videoListView = new VideoListView({
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
