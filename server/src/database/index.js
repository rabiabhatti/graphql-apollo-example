// @flow

import Sequelize from 'sequelize'
import { database as databaseConfig } from '../../config'

const database = new Sequelize('postgres', databaseConfig.user, databaseConfig.password, {
  host: databaseConfig.host,
  port: databaseConfig.port,
  database: databaseConfig.database,
  dialect: 'postgres',
  logging: process.env.LOG_LEVEL === 'debug',
})

const models = {
  User: database.import('./User'),
  Post: database.import('./Post'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

async function syncTables() {
  database.sync({  force: true })
}

async function getUserById(id){
  return models.User.findOne({
    where: { id },
  })
}

export default database
export {
  models,
  syncTables,
  getUserById,
}
