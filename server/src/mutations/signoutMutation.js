// @flow

export default {
  resolve(context) {
    return context.session.userId = null
  }
}
