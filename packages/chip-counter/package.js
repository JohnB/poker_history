Package.describe({
  name: 'johnb:chip-counter',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'UI to help count your poker chips at the end of the night.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use("templating",                     "client");
  api.addFiles("chipCounter.html",          "client");
  api.addFiles("chip_counter_template.js",  "client");
  api.addFiles("chip-counter.css",          "client");
  //api.export('ChipCounter',                 "client");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('johnb:chip-counter');
  api.addFiles('chip-counter-tests.js');
});
