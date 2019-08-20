import models from '../../models'

export default async function createPost(parent, { input: { title, description }}, context) {
    await models.Post.create({
        title,
        description,
        userId: context.req.session.userId
    })
    return await models.User.findByPk(context.req.session.userId)
}