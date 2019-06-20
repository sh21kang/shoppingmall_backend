"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  WishList: {
    user: ({
      id
    }) => _prismaClient.prisma.wishList({
      id
    }).user(),
    selection: ({
      id
    }) => _prismaClient.prisma.wishList({
      id
    }).selection()
  }
};
exports.default = _default;