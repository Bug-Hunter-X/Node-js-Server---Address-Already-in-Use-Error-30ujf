const http = require('http');

const port = 8080;

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use.  Retrying...`);
      setTimeout(startServer, 1000); //Retry after 1 second
    } else {
      console.error(`Server error: ${err.message}`);
    }
  });
};

startServer();