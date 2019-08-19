// @flow

import { globalIdField } from 'graphql-relay'
import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLBoolean,GraphQLList } from 'graphql'
import { Post as DBPost, getUserById } from '../database'
import Post from './post'

const User = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: globalIdField('User'),
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    posts: {
      type: new GraphQLNonNull(new GraphQLList(Post)),
      async resolve() {
          console.log(DBPost)
        return await DBPost.findAll({})
      },
    },
  },
})

export const ReturnUser = new GraphQLObjectType({
    name: 'UserR',
    fields: {
      user: {
        type: User,
        resolve(context) {
          return getUserById(context.session.userId)
        },
      },
    },
})

export default User
