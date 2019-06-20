"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _middlewares = require("../../../middlewares");

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Mutation: {
    deleteCart: async (_, args, {
      request
    }) => {
      (0, _middlewares.isAuthenticated)(request);
      const {
        cartId,
        selectionId
      } = args;
      await _prismaClient.prisma.deleteManySelections({
        id_in: [...selectionId]
      });
      await _prismaClient.prisma.deleteManyCarts({
        id_in: [...cartId]
      });
      return true;
    }
  }
};
exports.default = _default;