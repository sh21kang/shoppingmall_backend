import { prisma } from "../../../generated/prisma-client";

export default {
  User: {
    cart: ({ id }) => prisma.user({ id }).carts(),
    wish: ({ id }) => prisma.user({ id }).wishLists(),
    buying: ({ id }) => prisma.user({ id }).orders(),
  },
  
};