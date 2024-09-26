const jwt = require("jsonwebtoken");

function generateJwtToken(data: any) {
  return jwt.sign(data, "secret", {expiresIn: "100h"});
}

// This function is a middleware.
// It means to be used with authenticated endpoints
function authenticateToken(req: any, res: any, next: any) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // No token specified
  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(
    token,
    "secret", // TODO: Take it from .env
    (err: any, user: any) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;

      next();
    }
  );
}

module.exports = {generateJwtToken, authenticateToken};
