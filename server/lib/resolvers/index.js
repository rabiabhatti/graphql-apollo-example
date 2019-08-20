"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Post = _interopRequireDefault(require("./Post"));

var _Query = _interopRequireDefault(require("./Query"));

var _RootUser = _interopRequireDefault(require("./RootUser"));

var _mutation = _interopRequireDefault(require("./mutation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Query: _Query.default,
  Post: _Post.default,
  RootUser: _RootUser.default,
  Mutation: _mutation.default
};
exports.default = _default;