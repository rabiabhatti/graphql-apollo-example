'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var Post = sequelize.define('Post', {
        creator: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true
    });
    Post.associate = function (models) {
        Post.User = Post.belongsTo(models.User);
    };
    Post.findAll = function () {
        Post.findAll({
            include: [Post.User]
        });
    };
    return Post;
};