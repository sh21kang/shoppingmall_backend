"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  Order: {
    selections: ({
      id
    }) => _prismaClient.prisma.order({
      id
    }).selections()
  },
  Selection: {
    product: ({
      id
    }) => _prismaClient.prisma.selection({
      id
    }).product()
  }
};
exports.default = _default;