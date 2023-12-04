const router = require("express").Router();

const forumRouter = require("./forumRoute");
const groupRouter = require("./groupRoute");
const forumGmRouter = require("./forumGmRoute");
const forumReadingRouter = require("./forumReadingRoute");
const userRouter = require("./userRoute");

router.use("/", forumRouter);
router.use("/", groupRouter);
router.use("/", forumGmRouter);
router.use("/", forumReadingRouter);
router.use("/auth/", userRouter);

module.exports = router;
