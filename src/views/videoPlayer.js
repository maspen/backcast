var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    console.log('VideoPlayerView creation', this.model);
  },

  initialize: function() {
    this.listenTo(this.collection, 'select', this.selectVideo);
  },

  selectVideo: function(selection) {
    this.model = selection;
    this.render();
  },
  
  render: function() {
<<<<<<< HEAD
    // this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template());

    // console.log( 'video view', this );
    this.model.select ( this.model );
    // object.trigger(event, [*args]) 
    return this;
=======

    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
        return this;
>>>>>>> 30337efd8b3ff309106107c195d07aa0e129570f
  },

  template: templateURL('src/templates/videoPlayer.html')

});

// var player = new VideoPlayerView();