import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    deleteWishList: async (_, args, { request }) => {
      isAuthenticated(request);
      const {  wishId, selectionId } = args;
      await prisma.deleteManySelections({
          id_in:[
              ...selectionId
          ]
      })
      

      await prisma.deleteManyWishLists({
            
            id_in: [
                ...wishId
            ],
          
        })
    
        return true
    }
  }
};