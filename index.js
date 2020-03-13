const server = require('./server');
const globalMiddlewares = require('./middleware/setup.middleware');

server.setupMiddleware(globalMiddlewares);

server.start();
