import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeFullQuestion: async (_, args) => {
        const { id,password } = args;
        const tmp = await prisma.question({
        id
        });
        if(tmp.password == password){
            return tmp;
        }else{
            return null;
        }
    }
  }
};

