// @flow

import path from 'path'
import express from 'express'
import expressGraphql from 'express-graphql'
import expressSession from 'express-session'

import database from './database'
import Schema from './schema'

const SERVER_PORT = 8090

async function start() {
  await database.authenticate()
  await database.sync({ force: true })

  const app = express()

  app.set('trust proxy', 1)
  app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

  app.use('/graphql', expressGraphql(async (req) => {
    return {
      schema: Schema,
      pretty: true,
      rootValue: {
        userId: req.session.userId || null,
        session: req.session,
      },
      graphiql: process.env.NODE_ENV === 'development',
    }
  }))

  app.use('/', express.static(path.resolve(__dirname, '..', '..', 'public')))

  app.listen(SERVER_PORT, function() {
    console.log(`GraphQL server is listening on http://localhost:${SERVER_PORT}/`)
  })
}

start()
    .then(() => console.log('success'))
    .catch((err) => console.error(err))
