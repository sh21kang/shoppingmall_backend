import { prisma } from "../../../generated/prisma-client";

export default {
  Order: {
    selections : ({ id }) => prisma.order({ id }).selections(),
  },
  Selection: {
    product : ({ id }) => prisma.selection({ id }).product(),
  }
  
};