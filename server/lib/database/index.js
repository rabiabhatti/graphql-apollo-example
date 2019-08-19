'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserById = exports.syncTables = exports.User = exports.Post = undefined;

var syncTables = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Post.sync();

          case 2:
            _context.next = 4;
            return User.sync();

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function syncTables() {
    return _ref.apply(this, arguments);
  };
}();

var getUserById = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', User.findOne({
              where: { id: id }
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getUserById(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var findAllPosts = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function findAllPosts() {
    return _ref3.apply(this, arguments);
  };
}();

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _config = require('../../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var database = new _sequelize2.default('postgres', _config.database.user, _config.database.password, {
  host: _config.database.host,
  port: _config.database.port,
  database: _config.database.database,
  dialect: 'postgres',
  logging: process.env.LOG_LEVEL === 'debug'
});
var Post = database.define('Post', {
  creator: {
    type: _sequelize2.default.STRING,
    allowNull: false
  },
  title: {
    type: _sequelize2.default.STRING,
    allowNull: false
  },
  description: {
    type: _sequelize2.default.STRING,
    allowNull: false
  }
});

var User = database.define('User', {
  name: {
    type: _sequelize2.default.STRING,
    allowNull: false
  },
  email: {
    type: _sequelize2.default.STRING,
    allowNull: false
  },
  password: {
    type: _sequelize2.default.STRING,
    allowNull: false
  }
});

exports.default = database;
exports.Post = Post;
exports.User = User;
exports.syncTables = syncTables;
exports.getUserById = getUserById;