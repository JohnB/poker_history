
Meteor.publish('historical_games', function(limit) {
  return HistoricalGames.find({}, {limit: limit});
});
