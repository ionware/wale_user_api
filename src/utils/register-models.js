/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');

function registerModels(modelPath) {
  const modelLocation = path.resolve(__dirname, '../', modelPath);
  const models = fs
    .readdirSync(modelLocation)
    .map(model => path.join(modelLocation, model));

  models.forEach(model => require(model));
}

module.exports = registerModels;
