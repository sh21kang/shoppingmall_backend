import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    addCart: async (_, args, { request }) => {
      isAuthenticated(request);
      const {  wrapper } = args;
      var { user } = request;

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

      await prisma.createCart({
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