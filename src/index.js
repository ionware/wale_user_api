const server = require('./server');
const resolver = require('./utils/resolver');

server.setupMiddleware(resolver.middleware('setup'));

server.start();
