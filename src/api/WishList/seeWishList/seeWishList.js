import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeWishList: async (_, args,{ request, isAuthenticated }) => {
        isAuthenticated(request);
        const { user } = request;

        const tmp = await prisma.wishLists({
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

