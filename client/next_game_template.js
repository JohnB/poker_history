
Template.next_game.created = function () {
    var instance = this;

    // initialize the reactive variables from a non-reactive one
    instance.today = new Date().toISOString().slice(0, 10);
    instance.today_yyyymmdd = instance.today.replace(/\-/g,'');

    //instance.subscription = instance.subscribe('players', group_id);
};


//upcoming_first_friday
Template.next_game.helpers({
    // the players cursor
    upcoming_first_friday: function () {
        return Template.instance().today_yyyymmdd;
    }
});

Template.next_game.events({
    'click .send-invites': function (event, instance) {
        event.preventDefault();

        var yyyymmdd = $('#yyyymmdd').val();
        Session.setDefault('currentPokerGroupName', 'Example Group');
        var currentPokerGroupName = Session.get('currentPokerGroupName');
        console.log('currentPokerGroupName: '+currentPokerGroupName+'.');

        Meteor.call(
            'add_game',
            {yyyymmdd: yyyymmdd, pokerGroupName: currentPokerGroupName, respondents: {yes: [4,9,8], no: [11,5], maybe: [1,2,6], unknown: [3]}},
            function (error, result) {
                console.log('Error should be undefined: '+error);
                console.log(result);

                FlowRouter.go('/game/'+yyyymmdd);
            });
    }
});

