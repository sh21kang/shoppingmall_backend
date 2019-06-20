"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Mutation: {
    editUser: (_, args, {
      request,
      isAuthenticated
    }) => {
      isAuthenticated(request);
      const {
        name,
        email,
        address,
        phone,
        password
      } = args;
      const {
        user
      } = request;
      return _prismaClient.prisma.updateUser({
        where: {
          id: user.id
        },
        data: {
          password,
          name,
          email,
          address,
          phone
        }
      });
    }
  }
};
exports.default = _default;