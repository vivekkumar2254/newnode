const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Dockerized Node.js App!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
