const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('photos.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 2000; // <== You can change the port

server.use(middlewares);
server.use(router);

server.listen(port);