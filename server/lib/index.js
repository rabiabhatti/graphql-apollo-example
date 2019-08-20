"use strict";

var _ms = _interopRequireDefault(require("ms"));

var _path = _interopRequireDefault(require("path"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _graphqlYoga = require("graphql-yoga");

var _models = require("./models");

var _resolvers = _interopRequireDefault(require("./resolvers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_models.sequelize.sync().catch(console.error);

const context = req => ({
  req: req.request
});

const server = new _graphqlYoga.GraphQLServer({
  typeDefs: _path.default.resolve(__dirname, '../schema.graphql'),
  resolvers: _resolvers.default,
  context
});
server.express.use((0, _expressSession.default)({
  name: 'qid',
  secret: `some-random-secret-here`,
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: (0, _ms.default)('1d')
  }
}));
server.start({
  port: 9000
}, () => console.log('Server is running on localhost:9000')).catch(err => console.error(err));