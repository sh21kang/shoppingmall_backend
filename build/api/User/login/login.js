"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _createJWT = _interopRequireDefault(require("../../../utils/createJWT"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Mutation: {
    login: async (_, args) => {
      const {
        username,
        password
      } = args;
      const user = await _prismaClient.prisma.user({
        username
      });

      if (user === null) {
        return {
          ok: false,
          error: "Wrong email/secret combination",
          token: null
        };
      }

      if (user.password === password) {
        const token = (0, _createJWT.default)(user.id);
        return {
          ok: true,
          error: null,
          token
        };
      } else {
        return {
          ok: false,
          error: "Wrong email/secret combination",
          token: null
        };
      }
    }
  }
};
exports.default = _default;