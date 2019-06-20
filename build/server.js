"use strict";

require("./env");

var _graphqlYoga = require("graphql-yoga");

var _morgan = _interopRequireDefault(require("morgan"));

var _schema = _interopRequireDefault(require("./schema"));

var _passport = require("./passport");

var _middlewares = require("./middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = process.env.PORT || 4000;
const server = new _graphqlYoga.GraphQLServer({
  schema: _schema.default,
  context: ({
    request
  }) => ({
    request,
    isAuthenticated: _middlewares.isAuthenticated
  })
});
server.express.use((0, _morgan.default)("dev"));
server.express.use(_passport.authenticateJwt);
server.start({
  port: PORT
}, () => console.log(`✅ Server running on http://localhost:${PORT}`));