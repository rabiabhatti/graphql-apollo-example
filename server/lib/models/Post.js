"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

// @flow
function _default(sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: true
  });

  Post.associate = function (models) {
    Post.User = Post.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };

  return Post;
}