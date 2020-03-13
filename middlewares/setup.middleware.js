const {json} = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

module.exports = {
  helmet: helmet(),
  morgan: morgan('dev'),
  'express-json': json()
};
