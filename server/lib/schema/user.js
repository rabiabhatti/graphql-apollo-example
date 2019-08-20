"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ReturnUser = void 0;

var _graphqlRelay = require("graphql-relay");

var _graphql = require("graphql");

var _models = require("../models");

var _post = _interopRequireDefault(require("./post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
const User = new _graphql.GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: (0, _graphqlRelay.globalIdField)('User'),
    name: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    email: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    posts: {
      type: new _graphql.GraphQLNonNull(new _graphql.GraphQLList(_post.default)),

      async resolve() {
        return await _models.models.Post.findAll({});
      }

    }
  })
});
const ReturnUser = new _graphql.GraphQLObjectType({
  name: 'UserR',
  fields: {
    user: {
      type: User,

      resolve(context) {
        return (0, _models.getUserById)(context.session.userId);
      }

    }
  }
});
exports.ReturnUser = ReturnUser;
var _default = User;
exports.default = _default;