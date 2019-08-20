"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.sequelize = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _sequelize = require("sequelize");

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
const sequelize = new _sequelize.Sequelize('postgres', _config.database.user, _config.database.password, {
  host: _config.database.host,
  port: _config.database.port,
  database: _config.database.database,
  dialect: 'postgres',
  logging: process.env.LOG_LEVEL === 'debug'
});
exports.sequelize = sequelize;
const models = {};

_fs.default.readdirSync(__dirname).forEach(file => {
  if (file.endsWith('.js') && file !== 'index.js') {
    models[file.slice(0, -3)] = sequelize.import(_path.default.resolve(__dirname, file));
  }
});

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});
var _default = models;
exports.default = _default;