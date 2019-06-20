import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeProduct: async (_, args) => {
        const { id } = args;
        const tmp = await prisma.product({
        id
        });
        return tmp;
    }
  }
};

