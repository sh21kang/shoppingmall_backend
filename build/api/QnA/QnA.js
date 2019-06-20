"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  Question: {
    answer: ({
      id
    }) => _prismaClient.prisma.question({
      id
    }).answer(),
    product: ({
      id
    }) => _prismaClient.prisma.question({
      id
    }).product()
  },
  Answer: {
    question: ({
      id
    }) => _prismaClient.prisma.answer({
      id
    }).question()
  }
};
exports.default = _default;