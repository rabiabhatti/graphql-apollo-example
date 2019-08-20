// @flow

export default function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        name: {
            type:DataTypes.STRING,
            validate: {
                notNull: true,
                notEmpty: true,
            },
        },
        email: {
            type:DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true,
                notNull: true,
                notEmpty: true,
            },
        },
        password: {
            type:DataTypes.STRING,
            validate: {
                notNull: true,
                notEmpty: true,
            },
        },
    }, {
        timestamps: true,
    })
    User.associate = function(models) {
        User.Posts = User.hasMany(models.Post)
    }

    return User
}
