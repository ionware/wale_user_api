const path = require('path');
const util = require('../register-models');

// eslint-disable-next-line no-unused-vars
const callbackFn = jest.fn(model => {});

describe('Register models module ', () => {
  const modelPath = 'utils/__tests__/__module__/models';
  const absPath = path.resolve(__dirname, '__module__/models');

  test('loadModels will load models in specified directory', () => {
    expect(util.loadModels(modelPath)).toHaveLength(2);
  });

  test('register models will run given callback on all loaded models', () => {
    util.registerModels(modelPath, callbackFn);
    expect(callbackFn).toHaveBeenCalledTimes(2);
    expect(callbackFn.mock.calls).toEqual([
      [`${absPath}/post.model.js`],
      [`${absPath}/user.model.js`]
    ]);
  });
});
