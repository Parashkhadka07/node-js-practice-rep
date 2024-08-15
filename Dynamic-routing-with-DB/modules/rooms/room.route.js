const router = require("express").Router();
const roomcontroller = require("./room.controller");
//list
router.get("/", async (req, res, next) => {
  try {
    const result = await roomcontroller.list();
    res.json({ data: result, msg: "List of all room found sucessfully" });
  } catch (e) {
    next(e);
  }
});
//get by id
router.get("/:id", async (req, res, next) => {
  const result = await roomcontroller.readbyID(req?.params?.id);
  res.json({ data: result, msg: "Room found sucessfully " });
  try {
  } catch (e) {
    next(e);
  }
});
//create
router.post("/", async (req, res, next) => {
  try {
    const result = await roomcontroller.create(req?.body);
    res.json({ data: result, msg: "User Created sucessfully" });
  } catch (e) {
    next(e);
  }
});
//update all details of an room
router.put("/:id", async (req, res, next) => {
  try {
    const result = await roomcontroller.updatebyId(req?.params?.id, req?.body);
    res.json({ data: result, msg: "room updated sucessfully" });
  } catch (e) {
    next(e);
  }
});
//update single field of room

router.patch("/:id", async (req, res, next) => {
  try {
    const result = await roomcontroller.updatestatus(req?.params?.id);
    res.json({ data: result, msg: "field updated sucessfully" });
  } catch (e) {
    next(e);
  }
});
//delete
router.delete("/:id", async (req, res, next) => {
  try {
    const result = await roomcontroller.remove(req?.params?.id);
    res.json({ data: result, msg: "room deleted sucessfully" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
