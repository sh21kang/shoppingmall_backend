"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createJWT = id => {
  const token = _jsonwebtoken.default.sign({
    id
  }, process.env.JWT_SECRET || "");

  return token;
};

var _default = createJWT;
exports.default = _default;