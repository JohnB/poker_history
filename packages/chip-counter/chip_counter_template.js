
Template.chip_counter.created = function (options) {
  //console.log("Template.chip_counter.created.");
  var instance = this;
  instance.num_chips = new ReactiveVar(0);
  instance.optons = options;
  
  this.autorun(function () {
    var num_chips = instance.num_chips.get();

    //console.log("Now at "+num_chips+" chips.")
  });
};

Template.chip_counter.helpers({
  num_chips_as_formatted_text: function() {
    var num_chips = Template.instance().num_chips.get();
    var cents = num_chips % 100;
    var dollars = (num_chips - cents) / 100;
    cents = (cents < 10) ? ('0'+cents) : (''+cents);

    return '$'+dollars+'.'+cents;
  },
  num_chips_as_number_of_cents: function() {
    return Template.instance().num_chips.get();
  }
});

Template.chip_counter.events({
  'click .change-amount .btn': function (event, instance) {
    var amount = parseInt(event.currentTarget.dataset['cents']);

    event.preventDefault();
    //console.log('changeAmount clicked: '+amount);
    
    var num_chips = instance.num_chips.get();
    
    num_chips += amount;
    if (num_chips < 0) {
      num_chips = 0;
    }
    instance.num_chips.set(num_chips)
  }
});

//ChipCounter = {
//  num_chips: new Template.chip_counterReactiveVar(0),
//  num_chips_as_formatted_text: function() {
//    var cents = num_chips % 100;
//    var dollars = (num_chips - cents) / 100;
//    cents = (cents < 10) ? ('0'+cents) : (''+cents);
//
//    return '$'+dollars+'.'+cents;
//  },
//};