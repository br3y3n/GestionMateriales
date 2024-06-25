import jwt from "jsonwebtoken";
const { sign, verify } = jwt

const JWT_SECRET ="palabraSecreta";

const generateToken = (id) => {
  console.log("clg id token"+id)
  const jwt =sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};

const verifyToken = (jwt) => {
  const isOk = verify(jwt, JWT_SECRET);
  console.log(isOk)
  return isOk;
};

export { generateToken, verifyToken };