"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    seeAllQuestion: async (_, args) => {
      const {
        page
      } = args;
      const tmp = await _prismaClient.prisma.questions({
        skip: 15 * (page - 1),
        first: 15,
        orderBy: "createdAt_DESC"
      });
      return tmp;
    },
    QuestionCount: async (_, args) => {
      return _prismaClient.prisma.questionsConnection().aggregate().count();
    }
  }
};
exports.default = _default;