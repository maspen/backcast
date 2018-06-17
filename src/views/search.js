var SearchView = Backbone.View.extend({
  
  events: {
    'click .btn': 'triggerSearch', 
  },

  initialize: function() {

  },

  events: {
    'click button': 'performSearch',
    'keyup input': 'handleKeyUp'
  },

  handleKeyUp: function(e) {
    if (e.keyCode === 13) {
      this.performSearch();
    }
  },

  performSearch: function() {
    var query = this.$('input').val().trim();
    if (query) {
      this.collection.search(query);
    }
    this.$('input').val('');
  },
  
  render: function() {
    this.$el.html(this.template());
    
    //console.log( 'SearchView ', this.collection.__proto__.search.call('puppiess') );
    
    // TODO: need a listener on the button
    // when clicked, needs to get text
    // pass it to triggerSearch
    
    // this.$el.on('click', function(model) {
    //   console.log('search clicked');
    //   // fire event that invokes videos.search
    //   // videos.trigger('search')
    //   //this.trigger('search-clicked', {actionCommand: 'render'});
    //   // this.trigger('search-clicked', ['render']);
    //   console.log('model', model);
      
    //   //this.triggerSearch('puppiess');
      
    // });
    
    // this.$el.on('click', '.btn', function(event) {
    //   console.log(
    //   $('.form-control').val()
    //   );
    //   this.triggerSearch($('.form-control').val());
    // });

    // this.$('.btn').call(click(function(){
    //   console.log('in click', this);
    //   // this.triggerSearch($('.form-control').val());
    // }))

    return this;
  },
  
  triggerSearch: function(searchString) {
    this.trigger('search-clicked', ['search', searchString]);
  },

  template: templateURL('src/templates/search.html')

});
