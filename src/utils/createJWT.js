import jwt from "jsonwebtoken";
const createJWT = (id)=> {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_SECRET || ""
  );
  return token;
};

export default createJWT;
