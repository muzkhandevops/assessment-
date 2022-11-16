#!/usr/bin/env node

const
  port = process.env.PORT,
  http = require('http');

http.createServer((req, res) => {

  console.log(req.url);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<p>Hello DOG!</p> ` + process.env.PORT);

}).listen(port);

console.log(`Server running at http://localhost:${ port }/`);

