"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    seeMain: async (_, __) => {
      const tmp = await _prismaClient.prisma.products({
        where: {
          tags_in: ["best", "weekly", "new", "main"]
        },
        orderBy: "createdAt_DESC"
      });
      console.log(tmp.files);
      return tmp;
    }
  }
};
exports.default = _default;