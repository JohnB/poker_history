Template.game_list.created = function () {
    var instance = this;

    instance.today = new Date().toISOString().slice(0, 10);
    instance.yyyymmdd = parseInt( instance.today.replace(/\-/g,'') );
    instance.poker_group_games = [];

    instance.autorun(function () {
        var poker_group_name = "Example Group";
        instance.poker_group_games = instance.subscribe('poker_group_games', poker_group_name);
    });

    instance.future_games = function() {
        console.log('finding yyyymmdd $gte '+instance.yyyymmdd+'.')

        if (instance.poker_group_games.ready()) {
            var games = Games.find({yyyymmdd: {$gte: instance.yyyymmdd}});
            console.log("Received "+games.count()+" games.");
            console.log(" of a total of "+Games.find().count()+".");
            return games;
        } else {
            console.log("future_games Subscription is not ready yet.");
            return [];
        }
    }

};

Template.game_list.helpers({
    future_games: function () {
        return Template.instance().future_games();
    }
});
