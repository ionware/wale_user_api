const path = require('path');
const resolver = require('../resolver');

// Set the base path where modules are required by the resolver.
beforeAll(() => {
  const basePath = path.join(__dirname, '__module__');

  resolver.setMiddlewarePath(path.join(basePath, 'middlewares'));
  resolver.setServicePath(path.join(basePath, 'services'));
  resolver.setModelPath(path.join(basePath, 'models'));
  resolver.setControllerPath(path.join(basePath, 'controllers'));
});

describe('The Resolver class will', () => {
  test('resolve middleware components correctly', () => {
    let middleware = null;

    expect(() => {
      middleware = resolver.middleware('logger');
    }).not.toThrow();

    expect(typeof middleware).toBe('object');
    expect(middleware.file).toBe(false);
  });

  test('resolve services components', () => {
    let service = null;

    expect(() => {
      service = resolver.service('db');
    }).not.toThrow();

    expect(typeof service).toBe('function');
    expect(service()).toBe(true);
  });

  test('resolve controller components', () => {
    let controller = null;

    expect(() => {
      controller = resolver.controller('user');
    }).not.toThrow();

    expect(typeof controller).toBe('object');
    expect(controller).toHaveProperty('getAllUsers');
  });

  test('resolve models correctly', () => {
    let model = null;

    expect(() => {
      model = resolver.model('user');
    }).not.toThrow();

    expect(typeof model).toBe('object');
    expect(model).toHaveProperty('findById');
    expect(model.findById('12345')).toEqual([1, 2, 3, 4, 5]);
  });
});
