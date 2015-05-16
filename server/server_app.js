
// generate dummy content
Meteor.startup(function () {
  if (HistoricalGames.find().count() === 0) {
    for (i = 0; i <= 50; i++) {
      HistoricalGames.insert({
        date: '2015/2/17',
        buy_in: 25
      });
    }
  }
});
