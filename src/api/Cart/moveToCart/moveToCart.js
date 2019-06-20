import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    moveToCart: async (_, args, { request }) => {
      isAuthenticated(request);
      const {  wishId ,selectionId} = args;
      const {user} =request;
      for(let ele of selectionId){

          await prisma.createCart({
            user: {
              connect: {
                id: user.id
              }
            },
            selection :{
              connect : {
                id: ele
            }
            }
          });
      }


      await prisma.deleteManyWishLists({
            id_in: [
                ...wishId
            ],
        })
        return true
    }
  }
};