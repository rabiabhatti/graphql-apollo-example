'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlRelay = require('graphql-relay');

var _graphql = require('graphql');

var _database = require('../database');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = new _graphql.GraphQLObjectType({
  name: 'Post',
  fields: function fields() {
    var User = require('./user');
    return {
      id: (0, _graphqlRelay.globalIdField)('Post'),
      creator: {
        type: User.default,
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
      },
      title: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
      },
      description: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
      }
    };
  }
});