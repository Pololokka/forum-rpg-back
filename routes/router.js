const router = require("express").Router();

const forumRouter = require("./forumRoute");
const groupRouter = require("./groupRoute");

router.use("/", forumRouter);
router.use("/", groupRouter);

module.exports = router;
