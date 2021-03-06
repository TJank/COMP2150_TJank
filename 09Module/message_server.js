const http = require('http');
const fs = require('fs');
const url = require('url')

const server = http.createServer((req, res) => {
    let requestBody = [];

    req.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        requestBody.push(chunk);
    }).on('end', () => {
        requestBody = Buffer.concat(requestBody).toString();

        switch (req.method) {
            case 'POST':
            fs.appendFile('./data', requestBody + "\n", (err) => {
                console.log('write finished', err);
                res.writeHead(200, {'Content-Type' : 'text/plain'});
                res.body = 'Message saved!';
                res.write(res.body);
                res.end()
            });
                
                break;
            
            case 'GET':
            fs.readFile('./data', 'utf-8', (err, data) => {
                let dataArr = data.split("\n");
                res.writeHead(200, {'Content-Type' : 'text/plain'});
                res.body = dataArr.toString();
                res.write(res.body)
                res.end();
                });
            break;

            case 'PUT':
            fs.readFile('./data', 'utf-8',(err, data) => {
                let dataArr = data.split("\n");
                let incoming_url = url.parse(req.url, true);
                let u = incoming_url.pathname;
                u = u.slice(1,)

                let elToReplace = parseInt(u);
                if(elToReplace < dataArr.length) {
                    dataArr[elToReplace] = requestBody;
                    fs.writeFile('./data', '', (err) => {
                        console.error(err);
                    });
                    dataArr.forEach(element => {
                        fs.appendFile('./data', element + "\n", (err) => {
                            console.error(err);
                        });
                    });
                    res.writeHead(200, {'Content-Type' : 'text/plain'});
                    res.body = 'Resource replaced';
                    res.write(res.body)
                    res.end();
                    }
                });
            break;

            case 'DELETE':
            fs.readFile('./data', 'utf-8', (err, data) => {
                let dataArr = data.split("\n");
                let incoming_url = url.parse(req.url, true);
                u = u.slice(1,);
                let elToRemove = parseInt(u);

                if(elToRemove < dataArr.length) {
                    dataArr.splice(elToRemove, 1);
                    fs.writeFile('./data', '', (err) => {
                        console.error(err);
                    });
                dataArr.forEach(element => {
                    fs.appendFile('./data', element + "\n", (err) => {
                        console.error(err);
                    });
                });
                res.writeHead(200, {'Content-Type' : 'text/plain'});
                res.body = 'Resource deleted';
                res.write(res.body)
                res.end();
                }
            })
        
            default:
                res.writeHead(405, {'Content-Type' : 'text/plain'});
                res.body = "Method not supported.";
                res.write(res.body);
                res.end();
                break;
        }
    });

    res.on('error', (err) => {
        console.error(err);
    })


}).listen(8000);
