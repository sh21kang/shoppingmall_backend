"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const decodeJWT = async token => {
  try {
    const decoded = _jsonwebtoken.default.verify(token, process.env.JWT_SECRET || "");

    const {
      id
    } = decoded;
    const user = await User.findOne({
      id
    });
    return user;
  } catch (error) {
    return undefined;
  }
};

var _default = decodeJWT;
exports.default = _default;