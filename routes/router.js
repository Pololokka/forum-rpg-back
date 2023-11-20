const router = require("express").Router();

const forumRouter = require("./forumRoute");
const groupRouter = require("./groupRoute");
const forumGmRouter = require("./forumGmRoute");
const forumReadingRouter = require("./forumReadingRoute");

router.use("/", forumRouter);
router.use("/", groupRouter);
router.use("/", forumGmRouter);
router.use("/", forumReadingRouter);

module.exports = router;
