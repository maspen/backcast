var Videos = Backbone.Collection.extend({

  model: Video,
  
  initialize: function() {

    this.on('sync', function() {
      console.log('collection synced');
    });

    this.on('change', function() {
      console.log('collection changing');
    });

  },
  
});
