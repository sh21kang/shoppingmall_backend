import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeFullNotice: async (_, args) => {
        const { id } = args;
        const tmp = await prisma.notice({
        id
        });
        return tmp;
    }
  }
};

