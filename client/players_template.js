Template.players.created = function () {
  var instance = this;

  // initialize the reactive variables
  instance.loaded = new ReactiveVar(0);
  instance.limit = new ReactiveVar(55);

  // 2. Autorun

  // will re-run when the "limit" reactive variables changes
  this.autorun(function () {

    // get the limit
    var limit = instance.limit.get();

    // subscribe to the players publication
    var subscription = instance.subscribe('players', limit);
    var poker_group_subscription = instance.subscribe('poker_groups', 'Example Group');

    // if subscription is ready, set limit to newLimit
    if (subscription.ready()) {
      var actual = Players.find({}).count();
      console.log("Received "+actual+" of "+limit+" players.")
      instance.loaded.set(limit);
    } else {
      //console.log("Subscription is not ready yet.");
    }

    if (poker_group_subscription.ready()) {
      //console.log("Received poker_group_subscription.")
    } else {
      //console.log("poker_group_subscription is not ready yet.");
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
    return Template.instance().players();
  }
});

Template.players.events({
  //'click .add-player': function (event, instance) {
  //  event.preventDefault();
  //
  //  // get current value for limit, i.e. how many players are currently displayed
  //  var limit = instance.limit.get();
  //
  //  // increase limit by 5 and update it
  //  //limit += 5;
  //  instance.limit.set(limit)
  //}
});

