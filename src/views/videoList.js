var VideoListView = Backbone.View.extend({

  initialize: function() {

    // console.log('VLV ', this.collection); 

    this.listenTo( this.collection, 'add', function(event) {
      console.log('I hear syncing...');
      this.render();
    }, this);

  },

  render: function() {
    this.$el.children().detach();

    this.$el.html(this.template());
    
    $('.video-list').empty();
    
    _.each(this.collection.models, function(model, i) {
      new VideoListEntryView({
        model: model
      }).render().$el.appendTo('.video-list');
    }, this);

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
