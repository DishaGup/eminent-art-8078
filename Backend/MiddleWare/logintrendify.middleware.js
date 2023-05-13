const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const decoded = jwt.verify(token.split(" ")[1], "shhhhh");
      if (decoded) {
        req.body.userId = decoded.userId;
        req.body.userName = decoded.userName;
        next();
      }
    } catch (error) {
      res.send(error);
    }
  } else {
    res.send({ msg: "Please Login" });
  }
};

module.exports = { auth };