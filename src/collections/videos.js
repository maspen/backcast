var Videos = Backbone.Collection.extend({

<<<<<<< HEAD
  model: Video,
  
  url: 'https://www.googleapis.com/youtube/v3/search',
  
  initialize: function() {

    // go to YouTube, get data
    // if no date, take argument
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

    console.log('Collection sees search', this.model);

    this.listenTo( this.search, 'click', function(event) {
      console.log('I hear searching...');
      this.search('music');
    }, this);

    // MenuComponent.bind("search-clicked", this.search, this);
    
    $(document).on('click', '.search .btn', function(event) {
      event.preventDefault();
      var query = $(event.target).closest('div').find('input').val();
      this.search(query);
    }.bind(this));
    
    this.search('surfing');
  },
  
  search: function(query) {
    // fetch - query data, already has url
    // create a parse method
    $.ajax({
      url: this.url,
      type: 'GET',
      data: {
        key: YOUTUBE_API_KEY,
        maxResults: '5',
        q: query,
        part: 'snippet'
      },
      dataType: 'json',
      success: function(data) {
        console.log('Success!', data.items);
        this.set( data.items );
        var model = data.items[0];

        var id = model.id.videoId;
        var title = model.snippet.title;
        var description = model.snippet.description;
        var url = `https://www.youtube.com/embed/${id}`;

        $('.video-player').find('iframe').attr('src', url);
        $('.video-player').find('iframe').attr('src', url);
        $('.video-player').find('.video-player-details h3').text(title);      
        $('.video-player').find('.video-player-details div').text(description);

      }.bind(this),
      error: function(data) {
        console.log('Failure...', data);
      }.bind(this)
    });
  },
=======
>>>>>>> 30337efd8b3ff309106107c195d07aa0e129570f

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(query) {
    this.fetch({
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
    });

  },

  parse: function(response) {
    return response.items;
  }
  
});
