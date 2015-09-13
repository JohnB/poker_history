
FlowRouter.route('/', {
    name: 'root',
    action: function(params) {
        BlazeLayout.render("mainLayout", {content: "root"});
    }
});

FlowRouter.route('/tonight', {
    name: 'tonight',
    action: function(params) {
        BlazeLayout.render("mainLayout", {content: "tonight"});
    }
});

FlowRouter.route('/players', {
    name: 'players',
    action: function(params) {
        BlazeLayout.render("mainLayout", {content: "players"});
    }
});

FlowRouter.route('/options', {
    name: 'options',
    action: function(params) {
        BlazeLayout.render("mainLayout", {content: "options"});
    }
});

FlowRouter.route('/next_game', {
    name: 'next_game',
    action: function(params) {
        BlazeLayout.render("mainLayout", {content: "next_game"});
    }
});

FlowRouter.route('/history', {
    name: 'history',
    action: function(params) {
        BlazeLayout.render("mainLayout", {content: "history"});
    }
});

FlowRouter.route('/poker_groups', {
    name: 'poker_groups',
    action: function(params) {
        BlazeLayout.render("mainLayout", {content: "poker_groups"});
    }
});

FlowRouter.route('/game/:yyyymmdd', {
    name: 'showGame',
    action: function(params) {
        BlazeLayout.render("mainLayout", {content: "showGame"});
    }
});

Transitioner.setTransitions({
    'root->tonight': 'right-to-left',
    'tonight->root': 'left-to-right',

    'root->players': 'right-to-left',
    'players->root': 'left-to-right',

    'root->options': 'right-to-left',
    'options->root': 'left-to-right',

    'root->next_game': 'right-to-left',
    'next_game->root': 'left-to-right',

    'root->history': 'right-to-left',
    'history->root': 'left-to-right',

    'root->poker_groups': 'right-to-left',
    'poker_groups->root': 'left-to-right',

    'root->showGame': 'right-to-left',
    'showGame->root': 'left-to-right',

    'default': 'fade'
});