import path from 'path'
import {sequelize} from './models'
import { GraphQLServer } from 'graphql-yoga'
import resolvers from './resolvers'

sequelize.sync({ force: true }).catch(console.error)
const server = new GraphQLServer({ typeDefs: path.resolve(__dirname, '../schema.graphql'), resolvers })
server.start({ port: 9000 }, () => console.log('Server is running on localhost:9000'))
    .catch(err => console.error(err))
