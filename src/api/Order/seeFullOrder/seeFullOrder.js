import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeFullOrder: async (_, args) => {
        const { id } = args;
        const tmp = await prisma.order({
        id
        });
        return tmp;
    }
  }
};

