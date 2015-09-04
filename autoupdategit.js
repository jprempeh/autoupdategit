// on each run
// add one line from the sourcefile to targetfile
// add, commit and push

// cronjob: run node


var sourcefile = 'angular.js';
var targetfile = 'target.js';

var fs = require('fs');

//  get current number of lines of target
var i;
var countLines = 0;
fs.createReadStream(targetfile)
  .on('data', function(chunk) {
    for (i=0; i < chunk.length; ++i)
      if (chunk[i] == 10) countLines++;
  })
  .on('end', function() {
    console.log(countLines);
  });


//  get specific line of sourcefile
