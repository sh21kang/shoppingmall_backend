import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeAllNotice: async (_, args) => {
        const { page } = args;
        const tmp = await prisma.notices({
         skip : 15 *(page-1),
          last :15
        });
        return tmp;
    },
    NoticeCount :async (_, args)=>{
      return  prisma.noticesConnection().aggregate().count();
    }
  }
};

