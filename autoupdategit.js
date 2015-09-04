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
var get_line = function(filename, line_no, callback) {
    fs.readFile(filename, function (err, data) {
      if (err) throw err;

      // Data is a buffer that we need to convert to a string
      // Improvement: loop over the buffer and stop when the line is reached
      var lines = data.toString('utf-8').split("\n");

      if(+line_no > lines.length){
        return callback('File end reached without finding line', null);
      }

      callback(null, lines[+line_no]);
    });
}

get_line(sourcefile, 9, function(err, line){
  console.log('The line: ' + line);
})
