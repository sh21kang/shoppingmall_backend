import { prisma } from "../../../generated/prisma-client";

export default {
Question: {
    answer: ({ id }) => prisma.question({ id }).answer(),
    product:({ id }) => prisma.question({ id }).product(),
    
  },
  Answer :{
    question: ({ id }) => prisma.answer({ id }).question()
  },
  
};