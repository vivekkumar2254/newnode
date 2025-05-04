const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Dockerized Node.js App! my name is vivek ');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
