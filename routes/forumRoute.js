const router = require("express").Router();

const forumController = require("../controllers/forumController");

router.route("/forum").post((req, res) => forumController.create(req, res));

module.exports = router;
