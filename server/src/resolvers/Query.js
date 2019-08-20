import models from '../models'

export default {
    async viewer() {
        // TOOD: Replace with session cookie usage.
        const user = await models.User.findByPk(1)

        return user
    }
}