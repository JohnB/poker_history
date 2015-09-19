
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

FlowRouter.route('/add_player', {
    name: 'add_player',
    action: function(params) {
        BlazeLayout.render("mainLayout", {content: "add_player"});
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
    name: 'show_game',
    action: function(params) {
        BlazeLayout.render("mainLayout", {content: "show_game"});
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

    'root->show_game': 'right-to-left',
    'show_game->root': 'left-to-right',

    'players->add_player': 'right-to-left',
    'add_player->players': 'left-to-right',

    'default': 'fade'
});