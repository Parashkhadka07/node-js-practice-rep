/* have to write a code to encrypt password of the user 
like
const bcrypt =require("bcryptjs");
const genhash=(text)=>{
return bcrypt.hashSync(text,Number(process.env.SALT_ROUND(have to keep salt_roud in .env file)));

    
    }:
    const verifyhash=(text,hashtest)=>{
        return bcrypt.compareSync(text,hashText)};

also have to export
mosule.exports={genHash,verifyHash};


*/
