import {User} from '../../models'

export default async function register(parent, { input: {name, email, password }}, context) {
    return  await User.create({
        name,
        email,
        password
    })
}