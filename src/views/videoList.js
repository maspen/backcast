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

    // $('.video-list').on('click', '.video-list-entry-title', function(event) {
    //   var id = $(event.target).closest('.media').data('id');
    //   var title = $(event.target).text();
    //   var description = $(event.target).next('.video-list-entry-detail').text();
    //   var url = `https://www.youtube.com/embed/${id}`;
    //   $('.video-player').find('iframe').attr('src', url);      
    //   $('.video-player').find('.video-player-details h3').text(title);      
    //   $('.video-player').find('.video-player-details div').text(description);
    // }, this);
    
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
