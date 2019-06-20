import { prisma } from "../../../generated/prisma-client";

export default {
  WishList: {
    user : ({ id }) => prisma.wishList({ id }).user(),
    selection : ({ id }) => prisma.wishList({ id }).selection(),
  }
};