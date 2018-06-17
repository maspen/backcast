var VideoListEntryView = Backbone.View.extend({

  initialize: function() {

<<<<<<< HEAD
    this.$el.on('click', function(event) {

      this.model.select( this.model );

    }.bind(this));

  },
=======
  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function() {
    this.model.select();
  },
  
>>>>>>> 30337efd8b3ff309106107c195d07aa0e129570f
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
