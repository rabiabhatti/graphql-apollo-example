"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = login;

var _models = _interopRequireDefault(require("../../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function login(parent, {
  input: {
    name,
    password
  }
}, context) {
  const user = await _models.default.User.findOne({
    where: {
      name,
      password
    }
  });
  if (!user) throw new Error('User does not exist');
  context.req.session.userId = user.id;
  return user;
}