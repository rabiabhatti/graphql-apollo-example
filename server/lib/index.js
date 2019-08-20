"use strict";

var _path = _interopRequireDefault(require("path"));

var _models = require("./models");

var _graphqlYoga = require("graphql-yoga");

var _resolvers = _interopRequireDefault(require("./resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_models.sequelize.sync({
  force: true
}).catch(console.error);

const server = new _graphqlYoga.GraphQLServer({
  typeDefs: _path.default.resolve(__dirname, '../schema.graphql'),
  resolvers: _resolvers.default
});
server.start({
  port: 9000
}, () => console.log('Server is running on localhost:9000')).catch(err => console.error(err));