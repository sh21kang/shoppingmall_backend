"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  Selection: {
    product: ({
      id
    }) => _prismaClient.prisma.selection({
      id
    }).product()
  },
  Cart: {
    selection: ({
      id
    }) => _prismaClient.prisma.cart({
      id
    }).selection()
  }
};
exports.default = _default;