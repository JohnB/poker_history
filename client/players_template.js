Template.players.created = function () {
    console.log('Template.players.created = function () {...')
  // 1. Initialization

  var instance = this;

  // initialize the reactive variables
  instance.loaded = new ReactiveVar(0);
  instance.limit = new ReactiveVar(555);

  // 2. Autorun

  // will re-run when the "limit" reactive variables changes
  this.autorun(function () {

    // get the limit
    var limit = instance.limit.get();

    console.log("Asking for "+limit+" players…")

    // subscribe to the players publication
    var subscription = instance.subscribe('players', limit);

    // if subscription is ready, set limit to newLimit
    if (subscription.ready()) {
      console.log("> Received "+limit+" players. \n\n")
      instance.loaded.set(limit);
    } else {
      console.log("> Subscription is not ready yet. \n\n");
    }
  });

  // 3. Cursor

  instance.players = function() {
    return Players.find({}, {limit: instance.loaded.get()});
  }

};

Template.players.helpers({
  // the players cursor
  players: function () {
      console.log('player_count: '+Template.instance().players().count()+' - yup!')
    return Template.instance().players();
  },
  // are there more players to show?
  hasMorePlayers: function () {
    return Template.instance().players().count() >= Template.instance().limit.get();
  }
});

Template.players.events({
  'click .load-more': function (event, instance) {
    event.preventDefault();

    // get current value for limit, i.e. how many players are currently displayed
    var limit = instance.limit.get();

    // increase limit by 5 and update it
    //limit += 5;
    instance.limit.set(limit)
  }
});

