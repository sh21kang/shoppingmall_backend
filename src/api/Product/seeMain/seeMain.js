import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeMain: async (_, __) => {
      
      const tmp = await prisma.products({
        where: {
          tags_in :[ "best", "weekly", "new", "main"]
        },
        orderBy: "createdAt_DESC"
      });
      console.log(tmp.files);
      return tmp;
    }
  }
};

