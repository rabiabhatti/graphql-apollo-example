import {User} from '../../models'

export default {
    author(rootValue, args, context) {
        return User.findByPk(rootValue.userId)
    }
}