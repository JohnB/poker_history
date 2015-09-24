// generate dummy content
Meteor.startup(function () {
  console.log('startup');

  if (PokerGroups.find({name: 'Example Group'}).count() == 0) {
    var pokerGroup = PokerGroups.insert({name: 'Example Group'});
  }
  if (PokerGroups.find({name: 'Example Group'}).count() == 1 && Players.find({}).count() == 0) {
    var group = PokerGroups.find({name: 'Example Group'}).fetch()[0];
    var group_id = 0;
    console.log('group');
    console.log('group? '+group);
    group_id = group['_id'];
    console.log(group_id);
    for (player_num = 0; player_num <= 20; player_num++) {
      Players.insert({name: 'Example'+player_num, emails: 'john.baylor+example'+player_num+'@gmail.com', group_id: group_id});
    }
  }
});

// publish players and groups
Meteor.publish('players', function(limit) {
  return Players.find({});
});
Meteor.publish('poker_groups', function(name) {
  return PokerGroups.find({name: name});
});

NonEmptyString = Match.Where(function (x) {  // http://docs.meteor.com/#/full/matchpatterns
  check(x, String);
  return x.length > 0;
});

Meteor.methods({
  add_player: function (obj) {
    check(obj.name, NonEmptyString);
    check(obj.emails, NonEmptyString);
    var new_user = {name: obj.name, emails: obj.emails};  // TODO: somehow set the poker_group ID

    var player = Players.insert(new_user);
    return player;
  },

  add_game: function (obj) {
    console.log('add_game');
    console.log(obj);
    check(obj.yyyymmdd, NonEmptyString);
    check(obj.pokerGroupName, NonEmptyString);
    var yyyymmdd = parseInt(obj.yyyymmdd);

    var game_hash = {yyyymmdd: yyyymmdd, poker_group_name: obj.pokerGroupName};
    var game = Games.findOne(game_hash);

    // This code essentially creates a singleton for each date requested for a group.
    // Often called  findOrCreate(...)
    if (game) {
      console.log('A game dated '+yyyymmdd+' already exists - returning it.');
    } else {
      console.log('Creating game for '+yyyymmdd+' and '+obj.pokerGroupName+'.');
      game = Games.insert(game_hash);
    }

    console.log(obj.pokerGroupName);
    var pokerGroup = PokerGroups.findOne({name: obj.pokerGroupName});
    var group_id = pokerGroup['_id'];
    console.log('group_id: '+group_id+'.');
    var players = Players.find({group_id: group_id}).fetch();
    console.log(players);
    var player_emails = _.collect(players, function (player) { return player['emails']; } ).join(',');
    console.log(player_emails);

    var yyyy_mm_dd = ''+yyyymmdd; // coerce to string
    yyyy_mm_dd = yyyy_mm_dd.slice(0,4)+'/'+yyyy_mm_dd.slice(4,6)+'/'+yyyy_mm_dd.slice(6,8);
    var gameURL = Meteor.absoluteUrl('game/'+yyyymmdd);
    var yes_no_maybe = '<ul><li><a href="'+gameURL+'#yes">YES</a></li><li><a href="'+gameURL+'#no">NO</a></li><li><a href="'+gameURL+'#maybe">maybe</a></li></ul>'
    var mailOptions = {
      from:     'john.baylor@gmail.com',
      to:       player_emails,
      subject:  'Poker '+yyyy_mm_dd,

      //text:     'yes no maybe' // One or the other
      html:     'Can you make it? '+yes_no_maybe
    };
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    //this.unblock();  // but we want to return the game, I think...

    Email.send(mailOptions);

    return game;
  }
});