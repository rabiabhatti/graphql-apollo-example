import models from '../../models'

export default async function login(parent, { input: {name, password} }, context) {
    const user = await models.User.findOne({
        where: {
            name,
            password,
        },
    })
    if (!user) throw new Error('User does not exist')
    context.req.session.userId = user.id
    return user
}