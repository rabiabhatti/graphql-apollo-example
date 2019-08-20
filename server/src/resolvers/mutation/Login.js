import { User } from '../../models'

export default async function login(parent, { input: {name, password} }, context) {
    const user = await User.findOne({
        where: {
            name,
            password,
        },
    })
    if (!user) throw new Error('Email or password are incorrect')
    return user
}