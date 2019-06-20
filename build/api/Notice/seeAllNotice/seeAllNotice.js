"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    seeAllNotice: async (_, args) => {
      const {
        page
      } = args;
      const tmp = await _prismaClient.prisma.notices({
        skip: 15 * (page - 1),
        last: 15
      });
      return tmp;
    },
    NoticeCount: async (_, args) => {
      return _prismaClient.prisma.noticesConnection().aggregate().count();
    }
  }
};
exports.default = _default;