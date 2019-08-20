// @flow

import fs from 'fs'
import path from 'path'
import {Sequelize} from 'sequelize'
import { database as databaseConfig } from '../../config'

const sequelize = new Sequelize('postgres', databaseConfig.user, databaseConfig.password, {
  host: databaseConfig.host,
  port: databaseConfig.port,
  database: databaseConfig.database,
  dialect: 'postgres',
  logging: process.env.LOG_LEVEL === 'debug',
})

const models = {}
fs.readdirSync(__dirname).forEach(file => {
  if (file.endsWith('.js') && file !== 'index.js') {
    models[file.slice(0, -3)] = sequelize.import(path.resolve(__dirname, file))
  }
})

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export {
  sequelize
}
export default models
