"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPost;

var _models = _interopRequireDefault(require("../../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function createPost(parent, {
  input: {
    title,
    description
  }
}, context) {
  await _models.default.Post.create({
    title,
    description,
    userId: 1
  });
  return await _models.default.User.findByPk(1);
}