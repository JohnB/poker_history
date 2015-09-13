
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

//<li><a href="/players">Players</a></li>
//<li><a href="/options">Options</a></li>
//<li><a href="/next_game">whenCanYaPlay</a></li>
//<li><a href="/history">historical</a></li>
//<li><a href="/poker_groups">poker_groups</a></li>

FlowRouter.route('/game/:yyyymmdd', {
    name: 'showGame',
    action: function(params) {
        BlazeLayout.render("mainLayout", {content: "showGame"});
    }
});

