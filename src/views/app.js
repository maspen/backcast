var AppView = Backbone.View.extend({

  
  el: '#app',
  //var collection

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
    // this.videos = new Videos();

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
