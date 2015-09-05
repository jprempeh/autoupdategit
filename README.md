![](https://raw.githubusercontent.com/chiefsmurph/auto-update-git/master/githubgreens.png)
# auto-update-git
get that github green with auto-update-git. it periodically updates a git repo by copying dummy data from sourcefile to targetfile.

## what auto-update-git.js does on each run
1. add one line from the sourcefile [default: sourcefile.js] to targetfile [default: server.js]<br>
2. add, commit, push to github repo

## setup
1. npm install
2. copy dummy data to sourcefile.js (more the better!)
3. create your own custom commit messages in commit-msgs.txt

## single run
"node auto-update-git.js"

## or stay running indefinitely
1. to set your own update frequency change minMinsToNextUpdate & maxMinsToNextUpdate config variables at top of keeprunning.js
2. "forever start keep-running.js"
