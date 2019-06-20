import jwt from "jsonwebtoken";


const decodeJWT = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "");
    const { id } = decoded;
    const user = await User.findOne({ id });
    return user;
  } catch (error) {
    return undefined;
  }
};

export default decodeJWT;
