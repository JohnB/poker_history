// generate dummy content
Meteor.startup(function () {
  console.log('startup');
  if (PokerGroups.find({name: 'Example Group'}).count() == 0) {
    PokerGroups.insert({name: 'Example Group'});
  }
  if (PokerGroups.find({name: 'Example Group'}).count() == 1 && Players.find({}).count() == 0) {
    var group = PokerGroups.find({name: 'Example Group'}).fetch()[0];
    var group_id = 0;
    console.log('group');
    console.log('group? '+group);
    group_id = group['_id'];
    console.log(group_id);
    Players.insert({name: 'Example1', emails: 'john.baylor+example1@gmail.com', group_id: group_id});
    Players.insert({name: 'Example2', emails: 'john.baylor+example2@gmail.com', group_id: group_id});
    Players.insert({name: 'Example3', emails: 'john.baylor+example3@gmail.com', group_id: group_id});
  }
});

// publish players and groups
Meteor.publish('players', function(limit) {
  return Players.find({});
});
Meteor.publish('poker_groups', function(name) {
  return PokerGroups.find({name: name});
});
