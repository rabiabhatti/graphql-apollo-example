// @flow

import { GraphQLNonNull, GraphQLString } from 'graphql'

import User  from '../schema/user'
import { models } from '../models'

export default {
  type: User,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  async resolve(context, args) {
    const user = await models.User.findOne({
      where: {
        name: args.name,
        password: args.password,
      },
    })
    if (user) {
      context.session.userId = user.id
    } else {
      throw new Error('Unauthorized')
    }
    return user
  }
}
