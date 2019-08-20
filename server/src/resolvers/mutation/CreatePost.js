import models from '../../models'

export default async function createPost(parent, { input: { title, description }}, context) {
    await models.Post.create({
        title,
        description,
        userId: 1
    })
    return await models.User.findByPk(1)
}