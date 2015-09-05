// on each run
// add one line from the sourcefile to targetfile
// add, commit and push

// cronjob: run node


var sourcefile = 'angular.js';
var targetfile = 'target.js';

var fs = require('fs');
var async = require('async');
var exec = require('child_process').exec;

async.waterfall([
  function(callback) {
    //  get current number of lines of target
        var i;
        var countLines = 0;
        fs.createReadStream(targetfile)
          .on('data', function(chunk) {
            for (i=0; i < chunk.length; ++i)
              if (chunk[i] == 10) countLines++;
          })
          .on('end', function() {
            callback(null, countLines);
          });
  },
  function(lineNum, callback) {
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
        console.log('line num ' + lineNum);
        get_line(sourcefile, lineNum, function(err, line) {
          callback(null, line);
        })
  },
  function(lineToAdd, callback) {
    // append linetoadd to targetfile
    fs.appendFile(targetfile, lineToAdd + '\n', function (err) {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
      callback(null);
    });
  },
  function(callback) {
    // get all possible commit msgs
    var possiblecommitmsgs = fs.readFileSync('commit-msgs.txt').toString().split("\n");
    var selectedcommitmsg = possiblecommitmsgs[Math.floor(Math.random() * possiblecommitmsgs.length)];
    // and finally update git
    // add all and commit
    exec('git commit -a -m "' + selectedcommitmsg + '"', function(error, stdout, stderr) {
      //console.log('out ' + stdout);
      console.log('err ' + stderr);
      callback();
    });
  },
  function(callback) {
    // push to github
    exec('git push origin master', function(error, stdout, stderr) {
      console.log('out ' + stdout);
      //console.log('err ' + stderr);
    });
  }
]);
