'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _user = require('../schema/user');

var _user2 = _interopRequireDefault(_user);

var _database = require('../database');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  type: _user.ReturnUser,
  args: {
    title: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    description: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean)
    },
    creator: {
      type: _user2.default,
      resolve: function resolve(context) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt('return', (0, _database.getUserById)(context.session.userId));

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }))();
      }
    }
  },
  resolve: function resolve(context, args) {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (context.session.userId) {
                _context2.next = 2;
                break;
              }

              throw new Error('Unauthenticated');

            case 2:
              _context2.next = 4;
              return _database.Post.create({
                title: args.title,
                description: args.description,
                creator: args.creator
              });

            case 4:
              return _context2.abrupt('return', (0, _database.getUserById)(context.session.userId));

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  }
};