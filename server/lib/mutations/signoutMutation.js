'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

exports.default = {
  type: _graphql.GraphQLString,
  resolve: function resolve(context) {
    return context.session.userId = null;
  }
};