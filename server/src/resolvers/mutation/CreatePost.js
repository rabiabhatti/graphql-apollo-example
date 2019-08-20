import { Post } from '../../models'

export default async function createPost(parent, { input: { title, description }}, context) {
    return await Post.create({
        title,
        description,
        userId: context.user.id,
    })
}