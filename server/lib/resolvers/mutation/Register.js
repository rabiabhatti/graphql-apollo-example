"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = register;

var _models = _interopRequireDefault(require("../../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function register(parent, {
  input: {
    name,
    email,
    password
  }
}, context) {
  const user = await _models.default.User.create({
    name,
    email,
    password
  });
  context.req.session.userId = user.id;
  return user;
}