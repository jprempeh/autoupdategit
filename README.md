# auto-update-git
automatically updates a git repo at somewhat random intervals while updating target file with new buffer from source file

## what auto-update-git.js does on each run
add one line from the sourcefile [default: sourcefile.js] to targetfile [default: server.js]<br>
add, commit, push to github repo

## setup
1. npm install
2. copy data to sourcefile.js
3. create your own custom commit messages in commit-msgs.txt

## single run
"node autoupdategit.js"

## or stay running indefinitely
1. to set your own update frequency change minMinsToNextUpdate & maxMinsToNextUpdate config variables at top of keeprunning.js
2. "forever start keep-running.js"

## have fun!
