"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphqlRelay = require("graphql-relay");

var _graphql = require("graphql");

var _models = require("../models");

// @flow
var _default = new _graphql.GraphQLObjectType({
  name: 'Post',
  fields: () => {
    const User = require('./user');

    return {
      id: (0, _graphqlRelay.globalIdField)('Post'),
      creator: {
        type: User.default,

        async resolve(context) {
          return (0, _models.getUserById)(context.session.userId);
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

exports.default = _default;