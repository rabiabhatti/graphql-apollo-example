"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  author(rootValue, args, context) {
    return _models.default.User.findByPk(rootValue.userId);
  }

};
exports.default = _default;