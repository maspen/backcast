var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    console.log('VideoPlayerView creation', this.model);
  },

  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template());

    // console.log( 'video view', this );
    // this.model.select ( this.model );

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});

// var player = new VideoPlayerView();