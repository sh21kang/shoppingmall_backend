"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _graphqlTools = require("graphql-tools");

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const allTypes = (0, _mergeGraphqlSchemas.fileLoader)(_path.default.join(__dirname, "/api/**/*.graphql"));
const allResolvers = (0, _mergeGraphqlSchemas.fileLoader)(_path.default.join(__dirname, "/api/**/*.js"));
const schema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: (0, _mergeGraphqlSchemas.mergeTypes)(allTypes),
  resolvers: (0, _mergeGraphqlSchemas.mergeResolvers)(allResolvers)
});
var _default = schema;
exports.default = _default;