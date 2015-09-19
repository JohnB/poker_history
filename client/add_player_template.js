Template.add_player.created = function () {
    var instance = this;

    // initialize the reactive variables
    instance.new_player_name = new ReactiveVar(''+Date.now());
    instance.new_player_email = new ReactiveVar('john.baylor+'+Date.now()+'@gmail.com');
};

Template.add_player.helpers({
    new_player_name: function () {
        return Template.instance().new_player_name.get();
    },
    new_player_email: function () {
        return Template.instance().new_player_email.get();
    }
});

Template.add_player.events({
    'click .add-this-player': function (event, instance) {
        var name   = $('#new_player_name').val();  // Template.instance().new_player_name.get();
        var emails = $('#new_player_email').val(); // Template.instance().new_player_email.get();
        var new_user = {name: name, emails: emails};  // TODO: somehow set the poker_group ID
        console.log('new_user');
        console.log(new_user);
        Meteor.call('add_player', new_user);
        // TODO: on success, do something like BlazeLayout.render("players", {content: "players"});
        //       or maybe FlowRouter.redirect('/players')
    }
});
