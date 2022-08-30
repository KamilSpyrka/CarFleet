const jwt = require("jsonwebtoken");
const config = require("../config/config");

const verifyToken = (req, res, next) => {
  const token = req.cookies["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.authentication.jwtSecret);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send(err.message);
  }
  return next();
};

module.exports = verifyToken;
