var cron = require('cron');
var exec = require('child_process').exec;

var cronJob = cron.job("0 */10 * * * *", function() {

  exec('node autoupdategit.js', function(error, stdout, stderr) {
    console.log('out ' + stdout);
    console.info('cron job completed');
  })

});
cronJob.start();
