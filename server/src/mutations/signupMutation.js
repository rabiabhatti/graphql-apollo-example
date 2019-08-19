// @flow

import { GraphQLNonNull, GraphQLString } from 'graphql'

import { User } from '../schema/user'
import { User as DBUser } from '../database'

export default {
  type: User,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  async resolve(context, args) {
    const existedUser = DBUser.findOne({
      where: {
        email: args.email,
        password: args.password,
      }
    })
    if (existedUser) {
      throw new Error("User already exist")
    } else {
      let newUser = await DBUser.create({
        name: args.name,
        email: args.email,
        password: args.password,
      })
      context.session.userId = newUser.id
      return newUser
    }
  }
}
