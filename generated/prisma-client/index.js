"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "tmpCart",
    embedded: false
  },
  {
    name: "WishList",
    embedded: false
  },
  {
    name: "Cart",
    embedded: false
  },
  {
    name: "Selection",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  },
  {
    name: "File",
    embedded: false
  },
  {
    name: "Order",
    embedded: false
  },
  {
    name: "Notice",
    embedded: false
  },
  {
    name: "Question",
    embedded: false
  },
  {
    name: "Answer",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/sh21kang-3f7003/shoppingMall/dev`
});
exports.prisma = new exports.Prisma();
