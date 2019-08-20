import models from '../../models'

export default async function login(parent, { input: {name, password} }, context) {
    const user = await models.User.findOne({
        where: {
            name,
            password,
        },
    })
    if (!user) throw new Error('Email or password are incorrect')
    context.req.session.userId = user.id
    return user
}