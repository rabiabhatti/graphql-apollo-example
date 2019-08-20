import login from './login'
import register from './register'
import createPost from './createPost'

const mutations = {
    login,
    register,
    createPost
}

const mutationsRequiringAuth = {}
Object.keys(mutations).forEach(key => {
    mutationsRequiringAuth [key] = function(rootValue, args, context) {
        if (!context.user) {
            throw new Error('Authentication required')
        }
        return mutations[key](rootValue, args, context)
    }
})

export default mutations