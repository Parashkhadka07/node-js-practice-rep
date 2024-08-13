/*if the data is in huge amount and we have to use it the we call it payload
const usermodel=require("./user.model");
const {genhash,verifyhash}=require("../../utils/secure");
const create =async(payload)=>{const {password,roles,isActive, ....rest}=payload}
rest.password=genhash(password);
const result =await userModel.create(rest)} ;
also have to export this 

module.exports={create}*/