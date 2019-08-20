"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  posts(rootValue, args, context) {
    return _models.default.Post.findAll({
      where: {
        userId: rootValue.id
      }
    });
  }

};
exports.default = _default;