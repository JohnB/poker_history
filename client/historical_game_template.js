
Template.historical_games.created = function () {
  //console.log("Template.historical_games.created.");
  var instance = this;
  instance.limit = new ReactiveVar(5);
  
  this.autorun(function () {
    var limit = instance.limit.get();

    //console.log("limit is now at "+limit+".")
  });
};

Template.historical_games.events({
  //'click .change-amount': function (event, instance) {
  //  var el = $(event.toElement);
  //  var amount = el.data('cents');
  //
  //  event.preventDefault();
  //
  //  console.log('clicked: ' + amount + '.')
  //  // get current value for limit, i.e. how many historical_games are currently displayed
  //  var limit = instance.limit.get();
  //
  //  // increase limit by 5 and update it
  //  limit += amount;
  //  instance.limit.set(limit)
  //}
});