import models from '../models'

export default {
    posts(rootValue, args, context) {
        return models.Post.findAll({
            where: {
                userId: rootValue.id
            }
        })
    }
}