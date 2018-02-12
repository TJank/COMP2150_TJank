var fs = require('fs')
var myNumber = undefined

// declare addOne function and
// it can take a callback function as a parameter
function addOne(callback) {
    fs.readFile('number.txt', function doneReading(err, fileContents) {
        myNumber = parseInt(fileContents)
        myNumber++
        // go to whatever callback function was passed as a parameter
        callback()
    })
    
}

// declare a new function
function logMyNumber() {
    console.log(myNumber)
}
// calling addOne with logMyNumber as the callback function
addOne(logMyNumber)