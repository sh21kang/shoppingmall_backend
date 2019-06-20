"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _middlewares = require("../../../middlewares");

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Mutation: {
    deleteWishList: async (_, args, {
      request
    }) => {
      (0, _middlewares.isAuthenticated)(request);
      const {
        wishId,
        selectionId
      } = args;
      await _prismaClient.prisma.deleteManySelections({
        id_in: [...selectionId]
      });
      await _prismaClient.prisma.deleteManyWishLists({
        id_in: [...wishId]
      });
      return true;
    }
  }
};
exports.default = _default;