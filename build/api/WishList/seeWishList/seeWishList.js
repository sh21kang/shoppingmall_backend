"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    seeWishList: async (_, args, {
      request,
      isAuthenticated
    }) => {
      isAuthenticated(request);
      const {
        user
      } = request;
      const tmp = await _prismaClient.prisma.wishLists({
        where: {
          user: {
            id: user.id
          }
        },
        orderBy: "createdAt_DESC"
      });
      return tmp;
    }
  }
};
exports.default = _default;