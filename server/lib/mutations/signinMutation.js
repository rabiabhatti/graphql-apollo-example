'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _user = require('../schema/user');

var _database = require('../database');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  type: _user.User,
  args: {
    name: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    password: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  },
  resolve: function resolve(context, args) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var user;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _database.User.findOne({
                where: {
                  name: args.name,
                  password: args.password
                }
              });

            case 2:
              user = _context.sent;

              if (!user) {
                _context.next = 7;
                break;
              }

              context.session.userId = user.id;
              _context.next = 8;
              break;

            case 7:
              throw new Error('Unauthorized');

            case 8:
              return _context.abrupt('return', user);

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
};