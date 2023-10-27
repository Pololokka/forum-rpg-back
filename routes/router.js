const router = require("express").Router();

const forumRouter = require("./forumRoute");

router.use("/", forumRouter);

module.exports = router;
