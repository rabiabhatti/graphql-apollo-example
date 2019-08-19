"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  resolve: function resolve(context) {
    return context.session.userId = null;
  }
};