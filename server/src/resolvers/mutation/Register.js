import {User} from '../../models'

export default async function register(parent, { input: {name, email, password }}, context) {
    const rand = () => Math.random().toString(36).substr(2);
    const token = (length) => (
        rand()+rand()+rand()+rand()).substr(0,length
    )
    // TODO: Store encrypted password instead
    return await User.create({
        name,
        email,
        password,
        token: token(40)
    })
}