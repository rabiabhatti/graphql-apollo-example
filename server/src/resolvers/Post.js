import models from '../models'

export default {
    author(rootValue, args, context) {
        return models.User.findByPk(rootValue.userId)
    }
}