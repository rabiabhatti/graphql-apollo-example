export default {
    async viewer(parent, args, context) {
        return context.user
    }
}