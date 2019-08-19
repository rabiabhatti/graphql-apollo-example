// @flow

import { GraphQLNonNull, GraphQLBoolean, GraphQLString } from 'graphql'

import User, { ReturnUser } from '../schema/user'
import { getUserById, Post as DBPost } from '../database'

export default {
  type: ReturnUser,
  args: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    creator: {
      type: User,
      async resolve(context) {
          return getUserById(context.session.userId)
      },
    },
  },
  async resolve(context, args) {
    if (!context.session.userId) throw new Error('Unauthenticated')
    await DBPost.create({
      title: args.title,
      description: args.description,
      creator: args.creator,
    })
    return getUserById(context.session.userId)
  },
}
