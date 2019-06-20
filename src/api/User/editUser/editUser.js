import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editUser: (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { name, email, address, phone, password } = args;
      const { user } = request;
      return prisma.updateUser({
        where: { id: user.id },
        data: { password, name, email, address, phone}
      });
    }
  }
};