const connect = require('../database/connect');
const modelUtil = require('../utils/register-models');

class DbService {
  static start(config, callback = () => {}) {
    // Register mongoose Models (they will be buffered)
    DbService.registerModels();

    connect(config)
      .then(() => {
        callback();
        // eslint-disable-next-line no-console
        console.log('Database Connected');
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.error('Could not establish connection to database');
      });
  }

  static registerModels() {
    modelUtil.registerModels('models');
  }
}

module.exports = DbService;
