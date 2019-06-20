"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    seeProduct: async (_, args) => {
      const {
        id
      } = args;
      const tmp = await _prismaClient.prisma.product({
        id
      });
      return tmp;
    }
  }
};
exports.default = _default;