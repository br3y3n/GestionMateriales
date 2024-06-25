import { verifyToken } from "../utils/jwt.js";
const checkJwt = (req, res, next) => {
    try {
      const jwtByUser = req.headers.authorization || "";
     
      const jwt = jwtByUser.split(" ").pop();
      
      const isUser =  verifyToken(`${jwt}`)
      if (!isUser) {
       return res.status(401).send("NO_TIENES_UN_JWT_VALIDO");
      } else {
        
        req.user = isUser;
        next();
      }
    } catch (e) {
      console.log({ e });
      res.status(400);
      res.send("SESSION_NO_VALIDAD");
    }
  };

  export default checkJwt
  