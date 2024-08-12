const router = require("express").Router();

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
router.put("/", checkrole(["admin"]), (req, res, next) => {
  try {
    res.json({
      data: `program is running from room post and data is ${JSON.stringify(
        req?.body
      )}`,
    });
  } catch (e) {
    next;
  }
});

///////////////////
router.get("/", (req, res) => {
  res.json({ data: "hello from rooms" });
});

module.exports = router;
