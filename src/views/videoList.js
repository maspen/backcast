var VideoListView = Backbone.View.extend({

  initialize: function() {

    // console.log('VLV ', this.collection); 

    this.listenTo( this.collection, 'add', function(event) {
      console.log('I hear syncing...');
      this.render();
    }, this);

  },

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  render: function() {
    this.$el.children().detach();

    this.$el.html(this.template());
<<<<<<< HEAD
    
    $('.video-list').empty();
    
    _.each(this.collection.models, function(model, i) {
      new VideoListEntryView({
        model: model
      }).render().$el.appendTo('.video-list');
    }, this);

    return this;
=======

    this.$('.video-list').append(
      this.collection.map(function(video) {
        return new VideoListEntryView({ model: video }).render().el;
      })
    );
        return this;
>>>>>>> 30337efd8b3ff309106107c195d07aa0e129570f
  },

  template: templateURL('src/templates/videoList.html')

});
