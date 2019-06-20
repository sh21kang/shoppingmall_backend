import { prisma } from "../../../../generated/prisma-client";
import createJWT from "../../../utils/createJWT";

export default {
  Mutation: {
    login: async (_, args) => {
      const { username, password } = args;
      const user = await prisma.user({ username });
      if(user===null){
        return {
          ok :false,
          error :"Wrong email/secret combination",
          token :null
        };
      }

      if (user.password === password) {
      const token = createJWT(user.id);
        return {
          ok :true,
          error :null,
          token  
        };
      } else {
       
        return {
          ok :false,
          error :"Wrong email/secret combination",
          token :null
        };
      }
    }
  }
};