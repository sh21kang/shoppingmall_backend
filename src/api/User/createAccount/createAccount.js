import { prisma } from "../../../../generated/prisma-client";
import createJWT from "../../../utils/createJWT";


export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { username, password, email,name, phone = "", address = ""} = args;
      const exists = await prisma.$exists.user({
         username
      });
      if (exists) {
        return {
          ok: false,
          error: "username already exist",
          token: null
        };
      }
      const newUser =await prisma.createUser({
        username,
        password,
        email,
        name,
        phone,
        address,
        mileage: 0
      });
      const token = createJWT(newUser.id);
      return {
        ok: true,
        error: null,
        token
      };
    }
  }
};
