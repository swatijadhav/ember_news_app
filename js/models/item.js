App.Item = Ember.Object.extend();

App.Item.reopenClass({
  all: function() {
    return $.getJSON("http://api.ihackernews.com/page?format=jsonp&callback=?").then(function(response) {
      var items = [];

      response.items.forEach( function (item) {
        items.push( App.Item.create(item) );
      });

      return items;
    });
  }
});
