

Template.player_name_and_email.created = function () {
    console.log("Template.player_name_and_email.created.");
    Session.setDefault('player_name_and_email.name','someName');
    Session.setDefault('player_name_and_email.email','email@somewhere.com');
};

Template.player_name_and_email.helpers({
    name: function() {
        return Session.get('player_name_and_email.name');
    },
    email: function() {
        return Session.get('player_name_and_email.email');
    }
});

Template.player_name_and_email.events({
    'blur #player_name_and_email_name': function (event, instance) {
        Session.set('player_name_and_email.name', event.currentTarget.value);
    },
    'blur #player_name_and_email_email': function (event, instance) {
        Session.set('player_name_and_email.email', event.currentTarget.value);
    }
});
