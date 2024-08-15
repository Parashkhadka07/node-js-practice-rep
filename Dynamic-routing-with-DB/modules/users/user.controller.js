//business logic//
//all features of user
const { genhash, verifyhash } = require("../../utils/secure");
const userModel = require("./user.model");
const usermodel = require("./user.model");
const { genToken } = require("../../utils/token");
//bulk data (payload)
const create = async (payload) => {
  const { password, isActive, ...rest } = payload;
  rest.password = genhash(password);
  console.log({ rest });

  const result = await usermodel.create(rest);
  return result;
};
const register = async (payload) => {
  const { password, roles, isActive, ...rest } = payload;
  rest.password = genhash(password);
  return userModel.create(rest);
};

const login = async (payload) => {
  //user email check
  const { email, password } = payload;
  const user = await usermodel.findOne({ email, isActive: true });
  if (!user) throw new Error("User not found");
  const isValidPw = verifyhash(password, user?.password);
  if (!isValidPw) throw new Error("Email or password didnot match");
  const signData = {
    name: user?.name,
    email: user?.email,
    roles: user?.roles,
  };
  return genToken(signData);
};
module.exports = { create, register ,login};
