const Server = require('../server');
const server = require('../createServer');

jest.unmock('express');

test('Will create an Instance of Server Class', () => {
  expect(server instanceof Server).toBe(true);
});

test('Ensure singleton of Server Instance', () => {
  // eslint-disable-next-line global-require
  const anotherServer = require('../createServer');
  expect(server).toEqual(anotherServer);
});
