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
    createAccount: async (_, args) => {
      const {
        username,
        password,
        email,
        name,
        phone = "",
        address = ""
      } = args;
      const exists = await _prismaClient.prisma.$exists.user({
        username
      });

      if (exists) {
        return {
          ok: false,
          error: "username already exist",
          token: null
        };
      }

      const newUser = await _prismaClient.prisma.createUser({
        username,
        password,
        email,
        name,
        phone,
        address,
        mileage: 0
      });
      const token = (0, _createJWT.default)(newUser.id);
      return {
        ok: true,
        error: null,
        token
      };
    }
  }
};
exports.default = _default;