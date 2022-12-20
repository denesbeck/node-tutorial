const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to my home page');
  } else if (req.url === '/about') {
    res.write('Welcome to my about page');
  } else {
    res.write(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you're looking for</p>
    <a href="/">Back home</a>
    `);
  }
  res.end();
});

server.listen(5000);
