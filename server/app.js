// generate dummy content
Meteor.startup(function () {
  if (Players.find().count() === 0) {
    Players.insert({name: 'Example1', emails: 'example1@somewhere.com'});
    Players.insert({name: 'Example2', emails: 'example2@somewhere.com'});
    Players.insert({name: 'Example3', emails: 'example3@somewhere.com'});
  }
});

// publish players
Meteor.publish('players', function(limit) {
  return Players.find({});
});