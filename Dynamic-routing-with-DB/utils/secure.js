const bcryptjs = require("bcryptjs");
const genhash = (text) => {
  return bcryptjs.hashSync(text, Number(process.env.salt_round));
};
const verifyhash = (text, hashtext) => {
  return bcryptjs.compareSync(text, hashtext);
};
module.exports = { genhash, verifyhash };
