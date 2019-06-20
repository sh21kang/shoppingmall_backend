"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    seeProducts: async (_, args) => {
      const {
        id
      } = args;
      return await _prismaClient.prisma.products({
        where: {
          id_in: id
        },
        orderBy: "createdAt_DESC"
      });
    }
  }
};
exports.default = _default;