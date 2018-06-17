var AppView = Backbone.View.extend({

  
  el: '#app',
  search: '',
  // Backbone.Model.definitions = {},

  initialize: function() {
<<<<<<< HEAD
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
=======
    this.videos = new Videos();

    this.listenTo(this.videos, 'sync', this.selectFirst);
    this.videos.search('javascript tutorial');
    this.render();
      },
>>>>>>> 30337efd8b3ff309106107c195d07aa0e129570f


  selectFirst: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },
  
  render: function() {
    this.$el.html(this.template());
<<<<<<< HEAD
    
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
=======

    new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();

    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();

    new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
      el: this.$('.player')
    }).render();
        return this;
>>>>>>> 30337efd8b3ff309106107c195d07aa0e129570f
  },

  template: templateURL('src/templates/app.html')

});
