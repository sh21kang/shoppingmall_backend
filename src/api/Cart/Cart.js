import { prisma } from "../../../generated/prisma-client";

export default {
    Selection :{
      
      product :({ id }) => prisma.selection({ id }).product(),
    },
  Cart: {
    
    selection : ({ id }) => prisma.cart({ id }).selection(),
  },
  
};