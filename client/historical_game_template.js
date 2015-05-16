
Template.historical_games.created = function () {

  // 1. Initialization
  
  var instance = this;

  // initialize the reactive variables
  instance.loaded = new ReactiveVar(0);
  instance.limit = new ReactiveVar(5);
  
  // 2. Autorun
  
  // will re-run when the "limit" reactive variables changes
  this.autorun(function () {

    // get the limit
    var limit = instance.limit.get();

    console.log("Asking for "+limit+" historical_games…")
    
    // subscribe to the historical_games publication
    var subscription = instance.subscribe('historical_games', limit);

    // if subscription is ready, set limit to newLimit
    if (subscription.ready()) {
      console.log("> Received "+limit+" historical_games. \n\n")
      instance.loaded.set(limit);
    } else {
      console.log("> Subscription is not ready yet. \n\n");
    }
  });
  
  // 3. Cursor
  
  instance.historical_games = function() {
    return historical_games.find({}, {limit: instance.loaded.get()});
  }
  
};

Template.historical_games.helpers({
  // the historical_games cursor
  historical_games: function () {
    return Template.instance().historical_games();
  },
  // are there more historical_games to show?
  hasMorehistorical_games: function () {
    return Template.instance().historical_games().count() >= Template.instance().limit.get();
  }
});

Template.historical_games.events({
  'click .load-more': function (event, instance) {
    event.preventDefault();
    
    // get current value for limit, i.e. how many historical_games are currently displayed
    var limit = instance.limit.get();
    
    // increase limit by 5 and update it
    limit += 5;
    instance.limit.set(limit)
  }
});