var fs = require('fs')

// Read from a file
fs.readFile('./data.json', (err, data) => {
    if(err)
        return console.error(err)
    console.log(JSON.parse(data))
})




