"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _middlewares = require("../../../middlewares");

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Mutation: {
    addCart: async (_, args, {
      request
    }) => {
      (0, _middlewares.isAuthenticated)(request);
      const {
        wrapper
      } = args;
      var {
        user
      } = request;

      for (let wrap of wrapper) {
        const selection = await _prismaClient.prisma.createSelection({
          product: {
            connect: {
              id: wrap.productId
            }
          },
          count: wrap.count,
          color: wrap.color,
          size: wrap.size
        });
        await _prismaClient.prisma.createCart({
          user: {
            connect: {
              id: user.id
            }
          },
          selection: {
            connect: {
              id: selection.id
            }
          }
        });
      }

      return true;
    }
  }
};
exports.default = _default;