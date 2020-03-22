const app = require('express');
const Server = require('../server');

describe('The server', () => {
  let server;
  const middlewareStore = {
    fn: () => {},
    objectMiddleware: {
      morgan: () => {},
      logger: () => {}
    },
    arrayMiddleware: [() => {}, () => {}, () => {}]
  };
  const config = {
    db: {
      host: '127.0.0.1',
      port: '27170',
      driver: 'mongodb'
    },
    server: {
      host: '127.0.0.1',
      port: 9000
    }
  };

  beforeAll(() => {
    server = new Server(app, config);
  });

  test('require and set configuration', () => {
    expect(server.config).toEqual(config);
  });

  test('will start server with the correct PORT', () => {
    server.start();
    expect(app.listen).toHaveBeenCalledWith(9000);
  });

  describe('setupMiddleware Function can ', () => {
    beforeEach(() => {
      app.use.mockReset();
    });

    test('register function middleware', () => {
      server.setupMiddleware(middlewareStore.fn);
      expect(app.use).toHaveBeenCalledWith(middlewareStore.fn);
    });

    test('register array of middlewares', () => {
      server.setupMiddleware(middlewareStore.arrayMiddleware);
      middlewareStore.arrayMiddleware.forEach(fn => {
        expect(app.use).toHaveBeenCalledWith(fn);
      });
    });

    test('register object containing middlewares', () => {
      server.setupMiddleware(middlewareStore.objectMiddleware);
      expect(app.use).toHaveBeenCalledTimes(2);
    });
  });
});
