const JWT = require("jsonwebtoken");
const genToken = (data) => {
  return JWT.sign(data, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_DURATIO,
  });
};
const compareToken = () => {};
module.exports = { genToken, compareToken };
