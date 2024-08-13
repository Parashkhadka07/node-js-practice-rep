//business logic//
//all features of user
const { genhash, verifyhash } = require("../../utils/secure");
const usermodel = require("./user.model");
//bulk data (payload)
const create = async (payload) => {
  const { password, ...rest } = payload;
  rest.password = genhash(password);
  console.log({ rest });

  const result = await usermodel.create(rest);
  return result;
};
module.exports = { create };
