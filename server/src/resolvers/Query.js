import models from '../models'

export default {
    async viewer(parent, args, context) {
        // TOOD: Replace with session cookie usage.
        console.log(context.req.session)
        return await models.User.findByPk(1)
    }
}