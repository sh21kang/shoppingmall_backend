import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
    seeUser: async (_, args,{ request, isAuthenticated }) => {
        isAuthenticated(request);
        const { user } = request;

      const tmp = await prisma.user({
        id: user.id
      });

    
      return tmp;
        }
    }
}


