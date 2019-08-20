import ms from 'ms'
import path from 'path'
import session from 'express-session'
import { GraphQLServer } from 'graphql-yoga'

import {sequelize} from './models'
import resolvers from './resolvers'

sequelize.sync().catch(console.error)

const context = (req) => ({
    req: req.request,
})

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, '../schema.graphql'),
    resolvers,
    context,
})
server.express.use(session({
    name: 'qid',
    secret: `some-random-secret-here`,
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: ms('1d'),
    },
}))

server.start({ port: 9000 }, () => console.log('Server is running on localhost:9000'))
    .catch(err => console.error(err))
