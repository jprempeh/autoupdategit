var exec = require('child_process').exec;

// config
var minMinsToNextUpdate = 600;   // 1 hr
var maxMinsToNextUpdate = 24 * 60; // 4 hrs

var updategit = function(callback) {

  exec('node autoupdategit.js', function(error, stdout, stderr) {
    console.log(stdout);
    callback();
  })

}

var runInFuture = function() {

  var randMins = Math.floor(Math.random() * (maxMinsToNextUpdate-minMinsToNextUpdate) ) + minMinsToNextUpdate;
  console.log('running in ' + randMins + ' minutes');

  setTimeout(function() {
    updategit(function() {
      runInFuture();
    });
  }, randMins * 1000 * 60);

}

runInFuture();
