"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  async viewer() {
    // TOOD: Replace with session cookie usage.
    const user = await _models.default.User.findByPk(1);
    return user;
  }

};
exports.default = _default;