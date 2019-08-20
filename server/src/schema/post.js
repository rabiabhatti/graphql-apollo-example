// @flow

import { globalIdField } from 'graphql-relay'
import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql'
import { getUserById } from '../database'

export default new GraphQLObjectType({
  name: 'Post',
  fields: () => {
    const User = require('./user')
    return {
      id: globalIdField('Post'),
      creator: {
        type: User.default,
        async resolve(context) {
          return getUserById(context.session.userId)
        },
      },
      title: {
        type: new GraphQLNonNull(GraphQLString),
      },
      description: {
        type: new GraphQLNonNull(GraphQLString),
      },
    }
  }
})
