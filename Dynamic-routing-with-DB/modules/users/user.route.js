const router = require("express").Router();
const multer = require("multer");

const usercontroller = require("./user.controller");

const verify = (Syrole = []) => {
  return (req, res, next) => {
    try {
      const { roles: Userole = [] } = req.headers;
      const isValidRole = Syrole.some((role) => Userole.includes(role));
      if (!isValidRole) throw new Error("user unauthorized");
      next();
    } catch (e) {
      next(e);
    }
  };
};

router.get("/", verify(["admin"]), (req, res, next) => {
  try {
    res.json({ data: "hello from user get" });
  } catch (e) {
    next(e);
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "." + file.originalname.split(".")[1]);
  },
});

const upload = multer({ storage });

router.post(
  "/:register",
  verify(["admin"]),
  upload.single("profilepic"),
  async (req, res, next) => {
    try {
      const URL = "https://localhost:7777/resources/uploads/";
      const image = URL + req?.file?.filename;
      req.body.filename = image;
      if (req?.file?.filename) {
        req.body.image = image;
      }
      const result = await usercontroller.register(req.body);

      res.json({
        data: `user created sucessfully `,
      });
    } catch (e) {
      next(e);
    }
  }
);
router.post("/login", async (req, res, next) => {
  try {
    const result = await usercontroller.login(req.body);
    res.json({ data: result, msg: "user logged in sucessfully" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
