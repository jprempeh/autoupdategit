# auto-update-git
auto updates git from source file to target file at set interval using cronjob

## what it does
add one line from the sourcefile [default: sourcefile.js] to targetfile [default: server.js]<br>
add, commit, push to github repo

## setup
1. npm install
2. copy data to sourcefile.js
3. create your own custom commit messages in commit-msgs.txt

## single run
"node autoupdategit.js"

## or stay running indefinitely
"forever start keep-running.js"

## have fun!
