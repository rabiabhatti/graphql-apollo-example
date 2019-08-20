"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

// @flow
var _default = {
  type: _graphql.GraphQLString,

  resolve(context) {
    return context.session.userId = null;
  }

};
exports.default = _default;