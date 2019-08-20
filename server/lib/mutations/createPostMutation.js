"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _user = _interopRequireWildcard(require("../schema/user"));

var _models = require("../models");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// @flow
var _default = {
  type: _user.ReturnUser,
  args: {
    title: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    description: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean)
    },
    creator: {
      type: _graphql.GraphQLString,

      async resolve(context) {
        return (0, _models.getUserById)(context.session.userId);
      }

    }
  },

  async resolve(context, args) {
    if (!context.session.userId) throw new Error('Unauthenticated');
    await _models.models.Post.create({
      title: args.title,
      description: args.description,
      creator: args.creator
    });
    return (0, _models.getUserById)(context.session.userId);
  }

};
exports.default = _default;