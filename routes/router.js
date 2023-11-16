const router = require("express").Router();

const forumRouter = require("./forumRoute");
const groupRouter = require("./groupRoute");
const forumGmRouter = require("./forumGmRoute");

router.use("/", forumRouter);
router.use("/", groupRouter);
router.use("/", forumGmRouter);

module.exports = router;
