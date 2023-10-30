const router = require("express").Router();

const forumController = require("../controllers/forumController");

router.route("/forum").post((req, res) => forumController.create(req, res));

router.route("/forum").get((req, res) => forumController.getAll(req, res));

module.exports = router;
