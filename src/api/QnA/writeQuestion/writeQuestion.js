import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    writeQuestion: (_, args, { request, isAuthenticated }) => {
      const { QuestionType,
        productId="",
        username,
        password,
        contents } = args;

      const { user } = request;
      if(user ===undefined){
        return prisma.createQuestion({
            QuestionType,
            // product:{
            //     connect:{
            //         id:productId
            //     }
            // },
            username,
            password,
            contents,
          });
      }else{

        return prisma.createQuestion({
            QuestionType,
            user: {
                connect :{
                    id: user.id
                }
            },
            // product:{
            //     connect:{
            //         id:productId
            //     }
            // },
            username :user.username,
            password :user.password,
            contents,
          });
      }
    }
  }
};