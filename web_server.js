var http = require('http')

http.createServer((req, res) => {
    res.write('Ground conrol to major Tom.')
    res.end()
}).listen(3000)