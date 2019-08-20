"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Login = _interopRequireDefault(require("./Login"));

var _Register = _interopRequireDefault(require("./Register"));

var _CreatePost = _interopRequireDefault(require("./CreatePost"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  login: _Login.default,
  register: _Register.default,
  createPost: _CreatePost.default
};
exports.default = _default;