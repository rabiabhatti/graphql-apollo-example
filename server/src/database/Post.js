// @flow

export default function(sequelize, DataTypes) {
    const Post = sequelize.define('Post', {
        creator: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true,
    })
    Post.associate = function(models) {
        Post.User = Post.belongsTo(models.User)
    }
    Post.findAll = () => {
        Post.findAll({
            include: [Post.User],
        })
    }
    return Post
}
