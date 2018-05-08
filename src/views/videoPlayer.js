var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
  },

  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template());

    console.log( 'video view', this.model );
    this.model.select ( this.model );

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});

// var player = new VideoPlayerView();