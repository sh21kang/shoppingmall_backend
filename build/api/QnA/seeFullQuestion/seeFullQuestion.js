"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    seeFullQuestion: async (_, args) => {
      const {
        id,
        password
      } = args;
      const tmp = await _prismaClient.prisma.question({
        id
      });

      if (tmp.password == password) {
        return tmp;
      } else {
        return null;
      }
    }
  }
};
exports.default = _default;