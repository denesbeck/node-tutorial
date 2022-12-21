const http = require('http');
const { createReadStream } = require('fs');

const server = http.createServer((req, res) => {
  const stream = createReadStream('./myFolder/big-file.txt', 'utf8');
  stream.on('open', () => {
    stream.pipe(res);
  });
  stream.on('error', (err) => res.end(err));
});

server.listen(5000);
