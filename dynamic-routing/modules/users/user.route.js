const router = require("express").Router();
const multer = require("multer");

/////////////////////

////////////
const checkrole = (Syroles = []) => {
  return (req, res, next) => {
    try {
      const { roles: Urole } = req.headers;

      const result = Syroles.some((role) => Urole.includes(role));
      if (result === false) throw new Error("User unathorized");
      next();
    } catch (e) {
      next(e);
    }
  };
};
/////////////////////
router.put("/", (req, res, next) => {
  try {
    res.json({
      data: `program is running from user post and data is ${JSON.stringify(
        req?.body
      )}`,
    });
  } catch (e) {
    next;
  }
});
///////////////

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "." + file.originalname.split(".")[1]);
  },
});
const upload = multer({ storage });

///////////////////

router.post("/register", upload.single("profilepic"), (req, res, next) => {
  try {
    const url =
      "http://localhost:4999/uploads/" + JSON.stringify(req?.filename);
    console.log(req?.file);
    res.json({ data: `user registered sucessfully ${url}` });
  } catch (e) {
    next(e);
  }
});

///////////////////
router.get("/", (req, res) => {
  res.json({ data: "hello from rooms" });
});

module.exports = router;
/** have to use in create means post method 
  
 router.post("/",async(req,res,next)=>{
  try{const result=await userController.create(req.body);
  res.json({data:result,msg:"user created sucessfully"})}
  catch(e){next(e)}
 









**/
