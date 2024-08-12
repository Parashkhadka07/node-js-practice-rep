const router = require("express").Router();

router.use("/users", require("../modules/users/user.route"));
router.use("/rooms", require("../modules/rooms/room.route"));

module.exports = router;
