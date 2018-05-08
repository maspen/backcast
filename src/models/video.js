var Video = Backbone.Model.extend({

  defaults: {
    id: ''
  },

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function( model ) {

    console.log('model.select is fired on', model);
    // var id = $(event.target).closest('.media').data('id');
    var id = model.id;

    // var title = $(event.target).text();
    var title = model.attributes.snippet.title;

    // var description = $(event.target).next('.video-list-entry-detail').text();
    var description = model.attributes.snippet.description;

    var url = `https://www.youtube.com/embed/${id}`;

    $('.video-player').find('iframe').attr('src', url);      
    $('.video-player').find('.video-player-details h3').text(title);      
    $('.video-player').find('.video-player-details div').text(description);
  }

});
