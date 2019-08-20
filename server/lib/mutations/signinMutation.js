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
    password: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  },

  async resolve(context, args) {
    const user = await _models.models.User.findOne({
      where: {
        name: args.name,
        password: args.password
      }
    });

    if (user) {
      context.session.userId = user.id;
    } else {
      throw new Error('Unauthorized');
    }

    return user;
  }

};
exports.default = _default;