const http = require('http');
const fs = require('fs');
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf8');
const productData = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW page');
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT page');
    } else if (pathName === '/api') {
        res.writeHead(200,{ 'Content-Type': 'application/json'});
        res.end(data);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
        });
        res.end('<h1> Page not found </h1>');
    }
});

server.listen(8000, '127.0.0.1', ()=> {
    console.log('listening on port: 8000');
});