import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream('index.html').pipe(res);
})

const port = process.env.PORT ?? 3000;
console.log(`Listening on http://localhost:${port}`);
server.listen(port);