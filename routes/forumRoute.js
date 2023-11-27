const router = require("express").Router();

const forumController = require("../controllers/forumController");

router.route("/forum").post((req, res) => forumController.create(req, res));

router.route("/forum").get((req, res) => forumController.getAll(req, res));

router.route("/forum/:id").get((req, res) => forumController.get(req, res));

router
  .route("/forum/:id")
  .delete((req, res) => forumController.delete(req, res));

router.route("/forum/:id").put((req, res) => forumController.update(req, res));

module.exports = router;
