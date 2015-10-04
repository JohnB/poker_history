Template.game_list.created = function () {
    var instance = this;

    instance.today = new Date().toISOString().slice(0, 10);
    instance.yyyymmdd = parseInt( instance.today.replace(/\-/g,'') );

    this.autorun(function () {
        var future_games = instance.subscribe('future_games');

        if (future_games.ready()) {
            var actual = Games.find({yyyymmdd: {$gte: instance.yyyymmdd}}).count();
            console.log("Received "+actual+" games.");
        } else {
            //console.log("Subscription is not ready yet.");
        }
    });

    instance.future_games = function() {
        console.log('finding yyyymmdd $gte '+instance.yyyymmdd+'.')

        return Games.find({yyyymmdd: {$gte: instance.yyyymmdd}}, {sort: {yyyymmdd: -1}} );
    }

};

Template.game_list.helpers({
    future_games: function () {
        return Template.instance().future_games();
    }
});
