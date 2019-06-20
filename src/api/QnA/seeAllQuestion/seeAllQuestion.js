import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeAllQuestion: async (_, args) => {
        const { page } = args;
      const tmp = await prisma.questions({
       skip : 15 *(page-1),
        first :15,
        orderBy: "createdAt_DESC"
      });

    
      return tmp;
    },
    QuestionCount :async (_, args)=>{
      return  prisma.questionsConnection().aggregate().count();
    }
  }
};

