const express = require('express');
const resolver = require('./utils/resolver');

class Server {
  // eslint-disable-next-line no-shadow
  constructor(app = null, config) {
    this.app = app || express();
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

  startupService() {
    const services = this.config.startup;
    if (!services || !services.length) return;

    services.forEach(service => {
      const [name, command] = String.prototype.split.call(service, ':');
      const serviceModule = resolver.service(name);
      serviceModule[command](this.config[name] || this.config);
    });
  }

  start() {
    const {port} = this.config.server;
    this.startupService();
    // eslint-disable-next-line no-console
    console.log(`Started server on ${port}`);

    this.app.listen(port);
  }
}

module.exports = Server;
