// @flow

import { GraphQLSchema, GraphQLObjectType } from 'graphql'

import User from './user'
import Post from './post'
import { getUserById } from '../database'
import createPostMutation from '../mutations/createPostMutation'
import signupMutation from '../mutations/signupMutation'
import signinMutation from '../mutations/signinMutation'
import signoutMutation from '../mutations/signoutMutation'

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      viewer: {
        type: User,
        async resolve(context) {
          return getUserById(context.session.userId)
        },
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createPost: createPostMutation,
      signup: signupMutation,
      sigin: signinMutation,
      sigout: signoutMutation,
    },
  }),
})

export default schema
