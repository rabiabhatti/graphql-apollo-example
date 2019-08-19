// @flow

import express from 'express'
import expressGraphql from 'express-graphql'
import expressSession from 'express-session'
import path from 'path'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import database, { syncTables } from './database'
import Schema from './schema'

const SERVER_PORT = 8090

async function start() {
  await database.authenticate()
  await syncTables()

  const app = express()
  const compiler = webpack({
    entry: ['whatwg-fetch', path.resolve(__dirname, '..', '..', 'app', 'app.js')],
    module: {
      loaders: [
        {
          exclude: /node_modules/,
          loader: 'babel-loader',
          test: /\.js$/,
        },
      ],
    },
    output: {filename: 'bundle.js', path: __dirname + '/build'},
    devtool: 'cheap-module-source-map',
  })

  app.set('trust proxy', 1)
  app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

  app.use('/graphql', expressGraphql(async (req) => {
    return {
      schema,
      pretty: true,
      rootValue: {
        userId: req.session.userId || null,
        session: req.session,
      },
      graphiql: process.env.NODE_ENV === 'development',
    }
  }))

  app.use('/', express.static(path.resolve(__dirname, '..', '..', 'public')))
  app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: '/',
    noInfo: true
  }))
  app.use(webpackHotMiddleware(compiler))

  app.listen(SERVER_PORT, function() {
    console.log(`GraphQL server is listening on http://localhost:${SERVER_PORT}/`)
  })
}

start()
    .then(() => console.log('success'))
    .catch((err) => console.error(err))
