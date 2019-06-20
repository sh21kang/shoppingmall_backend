import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeAllOrder: async (_, args,{ request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
        const tmp = await prisma.orders({
          where: {
            user:{
                id: user.id
            }
          },
          orderBy: "createdAt_DESC"
        });
      
        return tmp;
    }
  }
};


