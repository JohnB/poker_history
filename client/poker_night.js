

Template.poker_night.created = function () {
    console.log("Template.poker_night.created.");
};

Template.poker_night.helpers({
    name: function() {
        return Session.get('player_name_and_email.name');
    },
    email: function() {
        return Session.get('player_name_and_email.email');
    }
});

