const http = require('http');

const header = 'hello world';
const server = http.createServer((_, res) => res.end(`<h1>${header}</h1>`));

server.listen(process.env.PORT);
