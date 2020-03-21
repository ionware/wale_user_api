const config = require('config');
const express = require('express');
const Server = require('./server');

let serverInstance = null;

// Server Instance should be a singleton instance.
function createServer() {
  if (serverInstance === null) {
    const app = express();
    serverInstance = new Server(app, config.util.toObject());
  }

  return serverInstance;
}

module.exports = createServer();
