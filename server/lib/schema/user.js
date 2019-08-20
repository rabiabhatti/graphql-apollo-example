'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReturnUser = undefined;

var _graphqlRelay = require('graphql-relay');

var _graphql = require('graphql');

var _database = require('../database');

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var User = new _graphql.GraphQLObjectType({
  name: 'User',
  fields: function fields() {
    return {
      id: (0, _graphqlRelay.globalIdField)('User'),
      name: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
      },
      email: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
      },
      password: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
      },
      posts: {
        type: new _graphql.GraphQLNonNull(new _graphql.GraphQLList(_post2.default)),
        resolve: function resolve() {
          var _this = this;

          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _database.models.Post.findAll({});

                  case 2:
                    return _context.abrupt('return', _context.sent);

                  case 3:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this);
          }))();
        }
      }
    };
  }
});

var ReturnUser = exports.ReturnUser = new _graphql.GraphQLObjectType({
  name: 'UserR',
  fields: {
    user: {
      type: User,
      resolve: function resolve(context) {
        return (0, _database.getUserById)(context.session.userId);
      }
    }
  }
});

exports.default = User;