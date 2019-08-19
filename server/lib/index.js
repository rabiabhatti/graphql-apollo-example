'use strict';

var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _this = this;

    var app, compiler;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _database2.default.authenticate();

          case 2:
            _context2.next = 4;
            return (0, _database.syncTables)();

          case 4:
            app = (0, _express2.default)();
            compiler = (0, _webpack2.default)({
              entry: ['whatwg-fetch', _path2.default.resolve(__dirname, '..', '..', 'app', 'app.js')],
              module: {
                loaders: [{
                  exclude: /node_modules/,
                  loader: 'babel-loader',
                  test: /\.js$/
                }]
              },
              output: { filename: 'bundle.js', path: __dirname + '/build' },
              devtool: 'cheap-module-source-map'
            });


            app.set('trust proxy', 1);
            app.use(session({
              secret: 'keyboard cat',
              resave: false,
              saveUninitialized: true,
              cookie: { secure: true }
            }));

            app.use('/graphql', (0, _expressGraphql2.default)(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt('return', {
                          schema: schema,
                          pretty: true,
                          rootValue: {
                            userId: req.session.userId || null,
                            session: req.session
                          },
                          graphiql: process.env.NODE_ENV === 'development'
                        });

                      case 1:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }()));

            app.use('/', _express2.default.static(_path2.default.resolve(__dirname, '..', '..', 'public')));
            app.use((0, _webpackDevMiddleware2.default)(compiler, {
              hot: true,
              publicPath: '/',
              noInfo: true
            }));
            app.use((0, _webpackHotMiddleware2.default)(compiler));

            app.listen(SERVER_PORT, function () {
              console.log('GraphQL server is listening on http://localhost:' + SERVER_PORT + '/');
            });

          case 13:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _database = require('./database');

var _database2 = _interopRequireDefault(_database);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var SERVER_PORT = 8090;