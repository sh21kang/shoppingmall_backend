import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    deleteCart: async (_, args, { request }) => {
      isAuthenticated(request);
      const {  cartId, selectionId } = args;
      await prisma.deleteManySelections({
          id_in:[
              ...selectionId
          ]
      })

      await prisma.deleteManyCarts({
            
            id_in: [
                ...cartId
            ],
          
        })
    
        return true
    }
  }
};