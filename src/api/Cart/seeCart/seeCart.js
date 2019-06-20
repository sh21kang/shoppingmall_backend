import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeCart: async (_, args,{ request, isAuthenticated }) => {
        isAuthenticated(request);
        const { user } = request;

        const tmp = await prisma.carts({
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

