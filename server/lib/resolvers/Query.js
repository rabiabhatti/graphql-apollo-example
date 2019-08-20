"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  async viewer(parent, args, context) {
    // TOOD: Replace with session cookie usage.
    console.log(context.req.session);
    return await _models.default.User.findByPk(1);
  }

};
exports.default = _default;