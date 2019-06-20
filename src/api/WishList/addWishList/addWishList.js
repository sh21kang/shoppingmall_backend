import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    addWishList: async (_, args, { request }) => {
      isAuthenticated(request);
      const {  wrapper } = args;
      const { user } = request;

      for(let wrap of wrapper){

        const selection = await prisma.createSelection({
          product:{
              connect : {
                  id: wrap.productId
              }
          },
          count : wrap.count,
          color : wrap.color,
          size : wrap.size
        });
  
         await prisma.createWishList({
          user: {
            connect: {
              id: user.id
            }
          },
          selection :{
            connect : {
              id: selection.id
          }
          }
        });
      }
      return true;
    }
  }
};