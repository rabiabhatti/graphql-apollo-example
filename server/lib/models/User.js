"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

// @flow
function _default(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true
      },
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
        notNull: true,
        notEmpty: true
      },
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true
      },
      allowNull: false
    }
  }, {
    timestamps: true
  });

  User.associate = function (models) {
    User.Posts = User.hasMany(models.Post);
  };

  return User;
}