"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Mutation: {
    writeQuestion: (_, args, {
      request,
      isAuthenticated
    }) => {
      const {
        QuestionType,
        productId = "",
        username,
        password,
        contents
      } = args;
      const {
        user
      } = request;

      if (user === undefined) {
        return _prismaClient.prisma.createQuestion({
          QuestionType,
          // product:{
          //     connect:{
          //         id:productId
          //     }
          // },
          username,
          password,
          contents
        });
      } else {
        return _prismaClient.prisma.createQuestion({
          QuestionType,
          user: {
            connect: {
              id: user.id
            }
          },
          // product:{
          //     connect:{
          //         id:productId
          //     }
          // },
          username: user.username,
          password: user.password,
          contents
        });
      }
    }
  }
};
exports.default = _default;