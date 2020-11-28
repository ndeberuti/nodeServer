const http = require('http');

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW page');
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT page');
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