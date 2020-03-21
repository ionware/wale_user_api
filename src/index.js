const server = require('./createServer');
const resolver = require('./utils/resolver');
const registerModels = require('./utils/register-models');

registerModels('models'); // only after the database is started and start the server simultanously.

server.setupMiddleware(resolver.middleware('setup'));

server.start();
