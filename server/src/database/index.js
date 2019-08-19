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
const Post = database.define('Post', {
  creator: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

const User = database.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

async function syncTables() {
  await Post.sync()
  await User.sync()
}

async function getUserById(id: number): Promise<?User> {
  return User.findOne({
    where: { id },
  })
}

export default database
export {
  Post,
  User,
  syncTables,
  getUserById,
}
