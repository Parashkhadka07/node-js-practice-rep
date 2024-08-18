const router = require("express").Router();
router.get("/", (req, res, next) => {
  res.json({ data: "hello from room" });
});

module.exports = router;
