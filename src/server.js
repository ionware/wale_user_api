const express = require('express');
const config = require('config');

class Server {
  // eslint-disable-next-line no-shadow
  constructor(config) {
    this.app = express();
    this.config = config;
  }

  setupMiddleware(middleware) {
    if (typeof middleware === 'function') {
      this.app.use(middleware);
    }

    if (Array.isArray(middleware)) {
      middleware.forEach(m => this.setupMiddleware(m));
    }

    if (typeof middleware === 'object') {
      const keys = Object.keys(middleware);
      // eslint-disable-next-line no-plusplus
      for (let i = 0, len = keys.length; i < len; i++) {
        this.setupMiddleware(middleware[keys[i]]);
      }
    }
  }

  setupRoute(path, middleware) {
    this.app.use(path, middleware);
  }

  start() {
    const {port} = this.config.server;
    // eslint-disable-next-line no-console
    console.log(`Started server on ${port}`);

    this.app.listen(port);
  }
}

let serverInstance = null;

// Server Instance should be a singleton instance.
function createServer() {
  if (serverInstance === null) {
    serverInstance = new Server(config.util.toObject());
  }

  return serverInstance;
}

module.exports = createServer();