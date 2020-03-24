const mongoose = require('mongoose');

function connect(config) {
  return mongoose.connect(config.url, {
    dbName: config.db,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

module.exports = connect;
