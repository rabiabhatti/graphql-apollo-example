import {Post} from '../../models'

export default {
    posts(rootValue, args, context) {
        return Post.findAll({
            where: {
                userId: rootValue.id
            }
        })
    }
}