const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    res.json({ data: "hello" });
  } catch (e) {
    next(e);
  }
});

router.post("/", (req, res) => {
  try {
    res.json({ data: "hello" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
