import { User } from '../../models'

export default async function getByAuthToken(authToken) {
        return User.findOne({where: { token: authToken }})
}