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
    email: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    password: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  },
  resolve: function resolve(context, args) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var existedUser, newUser;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              existedUser = _database.User.findOne({
                where: {
                  email: args.email,
                  password: args.password
                }
              });

              if (!existedUser) {
                _context.next = 5;
                break;
              }

              throw new Error("User already exist");

            case 5:
              _context.next = 7;
              return _database.User.create({
                name: args.name,
                email: args.email,
                password: args.password
              });

            case 7:
              newUser = _context.sent;

              context.session.userId = newUser.id;
              return _context.abrupt('return', newUser);

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
};