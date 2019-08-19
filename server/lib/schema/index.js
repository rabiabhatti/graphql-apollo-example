'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

var _database = require('../database');

var _createPostMutation = require('../mutations/createPostMutation');

var _createPostMutation2 = _interopRequireDefault(_createPostMutation);

var _signupMutation = require('../mutations/signupMutation');

var _signupMutation2 = _interopRequireDefault(_signupMutation);

var _signinMutation = require('../mutations/signinMutation');

var _signinMutation2 = _interopRequireDefault(_signinMutation);

var _signoutMutation = require('../mutations/signoutMutation');

var _signoutMutation2 = _interopRequireDefault(_signoutMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var schema = new _graphql.GraphQLSchema({
  query: new _graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      viewer: {
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
    }
  }),
  mutation: new _graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createPost: _createPostMutation2.default,
      signup: _signupMutation2.default,
      sigin: _signinMutation2.default,
      sigout: _signoutMutation2.default
    }
  })
});

exports.default = schema;