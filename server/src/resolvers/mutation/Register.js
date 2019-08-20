import models from '../../models'

export default async function register(parent, { input: {name, email, password }}, context) {
    const user = await models.User.create({
        name,
        email,
        password
    })
    context.req.session.userId = user.id
    return user
}