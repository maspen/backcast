var Videos = Backbone.Collection.extend({

  model: Video,
  
  url: 'https://www.googleapis.com/youtube/v3/search',
  // url: 'https://www.youtube.com/results?search_query=surfing&pbi=1',
  
  // url: 'https://gdata.youtube.com/feeds/api/playlists/67DEB98D8D9CF0F7?v=2&alt=json-in-script&max-results=6',
  
  // to fetch from url
  // url: "http://localhost:51377/api/Books",
  // then:
  //     collection
  
  initialize: function() {
    

    // go to YouTube, get data
    // if no date, take argument
    console.log('Videos.initialize');
    console.log(this);

    this.on('sync', function() {
      console.log('collection synced');
    });

    this.on('change', function() {
      console.log('collection changing');
    });
    
    // something is added
    this.on('add', function(model) {
      console.log('something from collection got added');
    });
    
    // something is removed
    this.on('remove', function(model) {
      console.log('something from collection got removed');
    });
    
    this.search();
  },
  
  search: function() {
    // fetch - query data, already has url
    // create a parse method
    $.ajax({
      url: this.url,
      type: 'GET',
      data: {
        key: YOUTUBE_API_KEY,
        maxResults: '5',
        q: 'surfing',
        part: 'snippet'
      },
      dataType: 'json',
      success: function(data) {
        console.log('Success!', data.items);
        this.set( data.items );
        console.log(this);
        // model.select( this.models[0] );
      }.bind(this),
      error: function(data) {
        console.log('Failure...', data);
      }.bind(this)
    });
  },

});
