var Video = Backbone.Model.extend({

  defaults: {
    id: ''
  },

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function( model ) {
    
    model = model || this;
    
    var id = model.id;
    var title = model.attributes.snippet.title;
    var description = model.attributes.snippet.description;
    var url = `https://www.youtube.com/embed/${id}`;

    $('.video-player').find('iframe').attr('src', url);      
    $('.video-player').find('.video-player-details h3').text(title);      
    $('.video-player').find('.video-player-details div').text(description);
  }

});
