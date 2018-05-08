var VideoListView = Backbone.View.extend({

  initialize: function() {
    // this.$el.children().detach();
    // // TODO listener on collection when changes calls render
    // _.each(this.collection.models, function(movie) {
    //   // console.log('movie ' + movie);
    //   //console.log('VideoListView calling render()');
    //   this.render();
    // }, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    
    $('.video-list').empty();
    
    _.each(this.collection.models, function(model, i){
      new VideoListEntryView({
        // el: this.$('.video-list'),
        model: model
      }).render().$el.appendTo('.video-list');
    }, this);
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
