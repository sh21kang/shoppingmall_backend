import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeProducts: async (_, args) => {
        const {id} = args;
        return  await prisma.products({
        where: {
          id_in : id
        },
        orderBy: "createdAt_DESC"
      });
    }
  }
};

