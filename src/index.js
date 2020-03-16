const server = require('./server');
const resolver = require('./utils/resolver');
const registerModels = require('./utils/register-models').default;

registerModels('models'); // only after the database is started and start the server simultanously.

server.setupMiddleware(resolver.middleware('setup'));

server.start();
