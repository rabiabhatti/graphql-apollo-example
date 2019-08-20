"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _user = _interopRequireDefault(require("../schema/user"));

var _models = require("../models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
var _default = {
  type: _user.default,
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

  async resolve(context, args) {
    const existedUser = _models.models.User.findOne({
      where: {
        email: args.email,
        password: args.password
      }
    });

    if (existedUser) {
      throw new Error("User already exist");
    } else {
      let newUser = await _models.models.User.create({
        name: args.name,
        email: args.email,
        password: args.password
      });
      context.session.userId = newUser.id;
      return newUser;
    }
  }

};
exports.default = _default;