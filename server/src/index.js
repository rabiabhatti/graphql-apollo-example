import path from 'path'
import { GraphQLServer } from 'graphql-yoga'

import {sequelize} from './models'
import resolvers from './resolvers'

import * as userService from './services/user'

sequelize.sync().catch(console.error)

async function getContext({request}) {
    console.log(request.headers)
    const authToken = request.headers['x-auth-token']
    const user = authToken ? await userService.getByAuthToken(authToken) : null
    return {user}
}

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, '../schema.graphql'),
    resolvers,
    context: getContext,
})
server.start({ port: 9000 }, () => console.log('Server is running on localhost:9000'))
    .catch(err => console.error(err))
