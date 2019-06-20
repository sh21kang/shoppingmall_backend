"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  Product: {
    files: ({
      id
    }) => _prismaClient.prisma.product({
      id
    }).files()
  }
};
exports.default = _default;