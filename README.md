# autoupdategit
auto updates git from source file to target file at set interval using cronjob

## what it does
add one line from the sourcefile [default: sourcefile.js] to targetfile [default: server.js]<br>
add, commit, push to github repo

## usage
1. copy data to sourcefile.js
2. create your own custom commit messages in commit-msgs.txt
3. "node autoupdategit.js"

## set up cronjob
run "node setupcron.js"

## have fun!
