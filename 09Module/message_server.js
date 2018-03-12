const http = require('http');

const server = http.createServer((req, res) => {
    // destructuring operator
    const {headers, method, url} = req;
    // Declare a block-scope variable using "let"
    let body = [];

    req.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
    })

})