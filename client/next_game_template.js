
Template.next_game.created = function () {
    var instance = this;

    // initialize the reactive variables from a non-reactive one
    instance.today = new Date().toISOString().slice(0, 10);
    instance.today_yyyymmdd = instance.today.replace(/\-/g,'');

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

        var date = $('#yyyymmdd').val();
        Meteor.call(
            'add_game',
            {date: date},
            function (error, result) {
                console.log(error);
                console.log(result);
        });
    }
});

