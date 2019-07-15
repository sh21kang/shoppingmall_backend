import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    addOrder: async (_, args, { request }) => {
      // isAuthenticated(request);
      //annot destructure property `name` of 'undefined' or 'null' TypeError
      const {userInput, selectionId,wrapper,totalPrice,cartId } = args;
      const {name,phone,recipient,recipientPhone,address,payment} = userInput;
      const email = userInput.email;
      const info = userInput.info;
      const message = userInput.message;
      const { user } = request;
      let tmp = new Date();
      
      let orderNumber ;
      if(user !==undefined)
      orderNumber= String(tmp.getTime()).substring(2,12)+ user.id.substring(5,10);
      else
      orderNumber =String(tmp.getTime()).substring(2,17)
      

      if(selectionId!==undefined &&selectionId !==null){ // 장바구니에서 오는 경우(물품 종류가 여러가지) selectionId
    
        
        const order = await prisma.createOrder({
            user: {
              connect: {
                id: user.id
              }
            },
            selections :{
              connect : [
                  ...selectionId
              ]
            },
            name,
            phone,
            email,
            recipient,
            recipientPhone,
            address,
            message,
            info,
            totalPrice,
            payment,
            status : "order",
            orderNumber
          });
          
          await prisma.deleteManyCarts({
            id_in: [
                ...cartId
            ],
        })

          return true;

      }else{ // 바로 결제하는 경우 혹은 로그인 안하고 결제하는 경우
        
        let tmp2=[];
        for(let wrap of wrapper){
          const selection = await prisma.createSelection({
            product:{
                connect : {
                    id: wrap.productId
                }
            },
            count : wrap.count,
            color : wrap.color,
            size : wrap.size
          });

          tmp2.push({
            id: selection.id
          })

        }
        if(user!==undefined){

          const order = await prisma.createOrder({
            user: {
              connect: {
                id:  user.id 
              }
            },
            selections :{
              connect :[
                ...tmp2
              ]
            },
            name,
            phone,
            email,
            recipient,
            recipientPhone,
            address,
            message,
            info,
            totalPrice,
            payment,
            status : "order",
            orderNumber
          });
        }else{
          const order = await prisma.createOrder({
            selections :{
              connect :[
                ...tmp2
              ]
            },
            name,
            phone,
            email,
            recipient,
            recipientPhone,
            address,
            message,
            info,
            totalPrice,
            payment,
            status : "order",
            orderNumber
          });
        }
        

          return true;
      }

      
    }
  }
};