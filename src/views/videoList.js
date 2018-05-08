var VideoListView = Backbone.View.extend({

  initialize: function() {
    //console.log( 'VideoListView type: ' + typeof this.collection === 'object'  );
    // console.log( 'VideoListView: ' + this.collection.models === 'array'  );
    //console.log( 'VideoListView: ' + JSON.stringify(this.collection));
    // need to put somewhere else?
    this.$el.children().detach();
    // TODO listener on collection when changes calls render
    _.each(this.collection, function(movie){
      // console.log('movie ' + movie);
      //console.log('VideoListView calling render()');
      this.render();
    }, this)
  },

  render: function() {
    console.log('VideoListView calling render()');
    // this.$el.children().detach();
    this.$el.html(this.template());
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
