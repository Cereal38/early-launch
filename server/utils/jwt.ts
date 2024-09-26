const jwt = require("jsonwebtoken");

function generateJwtToken(data: any) {
  return jwt.sign(data, "secret", {expiresIn: "100h"});
}
