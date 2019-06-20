"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  User: {
    cart: ({
      id
    }) => _prismaClient.prisma.user({
      id
    }).carts(),
    wish: ({
      id
    }) => _prismaClient.prisma.user({
      id
    }).wishLists(),
    buying: ({
      id
    }) => _prismaClient.prisma.user({
      id
    }).orders()
  }
};
exports.default = _default;