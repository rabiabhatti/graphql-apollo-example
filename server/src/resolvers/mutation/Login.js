import { User } from '../../models'

export default async function login(parent, { input: {email, password} }, context) {
    const user = await User.findOne({
        where: {
            email,
            password,
        },
    })
    if (!user) throw new Error('Email or password are incorrect')
    console.log(user)
    return user
}