/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');

function loadModels(modelPath) {
  const modelLocation = path.resolve(__dirname, '../', modelPath);
  const models = fs
    .readdirSync(modelLocation)
    .map(model => path.join(modelLocation, model));

  return models;
}

function registerModels(modelPath, callback) {
  const method = callback || require;

  loadModels(modelPath).forEach(model => method(model));
}

module.exports = {
  registerModels,
  loadModels
};
