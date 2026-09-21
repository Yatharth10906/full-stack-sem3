const http = require('http');

const PORT = 3001;

const server = http.createServer((req, res) => {
    console.log(`request received: ${req.method} ${req.url}`);

    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Powered-By', 'Node.js');

    res.end('Hello World\n');
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
