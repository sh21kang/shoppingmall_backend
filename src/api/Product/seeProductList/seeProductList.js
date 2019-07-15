import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeProductList: async (_, args) => {
        const {type, page} = args;
        return  prisma.products({
        where: {
            type 
        },
        skip : 24 *(page-1),
        last :24,
      });
    },
    ProductListCount :async (_, args)=>{
        const {type} = args;
        console.log(type)
        const count =await prisma.productsConnection({
            where:{
                type
            }
        }).aggregate().count();
        return parseInt(count/24) +(count%24===0 ? 0: 1);
      }
  }
};



