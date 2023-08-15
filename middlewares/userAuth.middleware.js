const jwt = require("jsonwebtoken");

function userAuth(req, res, next) {
  let token;

  if (req.method === "GET") token = req.query.token;
  if (req.method === "PUT") token = req.body.token;

  if (token === null)
    return res.status(401).json("The request is missing a user token");

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, email) => {
    if (err) return res.status(403).json("Access denied");

    req.email = email;
    next();
  });
}

module.exports = userAuth;
