/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const path = require('path');

class Resolver {
  constructor() {
    // folder where middleware resides
    this.middlewaresPath = path.join(__dirname, '../middlewares');
    // folder where the controllers resides.
    this.controllersPath = path.join(__dirname, '../controllers');
    // folder where the services resides
    this.servicesPath = path.join(__dirname, '../services');
    // folder where the model resides
    this.modelsPath = path.join(__dirname, '../models');
  }

  // eslint-disable-next-line class-methods-use-this
  resolve(...args) {
    const absPath = path.resolve(...args);

    return require(absPath);
  }

  middleware(middlewareName) {
    const moduleExports = this.resolve(
      this.middlewaresPath,
      `${middlewareName}.middleware`
    );

    return moduleExports;
  }

  service(serviceName) {
    const moduleExports = this.resolve(
      this.servicesPath,
      `${serviceName}.service`
    );

    return moduleExports;
  }

  model(modelName) {
    const moduleExports = this.resolve(this.modelsPath, `${modelName}.model`);

    return moduleExports;
  }

  controller(controllerName) {
    const moduleExports = this.resolve(
      this.controllersPath,
      `${controllerName}.controller`
    );

    return moduleExports;
  }

  setMiddlewarePath(absPath) {
    this.middlewaresPath = absPath;
  }

  setServicePath(absPath) {
    this.servicesPath = absPath;
  }

  setControllerPath(absPath) {
    this.controllersPath = absPath;
  }

  setModelPath(absPath) {
    this.modelsPath = absPath;
  }
}

let ResolverInstance = null;

function createResolverInstance() {
  if (ResolverInstance === null) {
    ResolverInstance = new Resolver();
  }

  return ResolverInstance;
}

module.exports = createResolverInstance();
