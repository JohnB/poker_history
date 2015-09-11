

Template.current_game.created = function () {
    console.log("Template.current_game.created.");
};

Template.current_game.helpers({
    is_selected_item: function() {
        return (Session.get('main_menu_selection') == 'current_game');
    }
});

Template.current_game.events({
    'click .pick-me': function (event, instance) {
        Session.set('main_menu_selection', 'current_game');
    },
    'click .to-parent': function (event, instance) {
        Session.set('main_menu_selection', 'main darn menu???');
    }
});

