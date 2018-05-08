var VideoListView = Backbone.View.extend({

  initialize: function() {

    this.listenTo( this.collection, 'sync', function(event) {
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

    $('.video-list').on('click', '.video-list-entry-title', function(event) {
      console.log( $(event.target).text() );
    });

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
