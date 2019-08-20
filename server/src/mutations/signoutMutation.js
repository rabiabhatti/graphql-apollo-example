// @flow

import { GraphQLString } from 'graphql'

export default {
  type: GraphQLString,
  resolve(context) {
    return context.session.userId = null
  }
}
