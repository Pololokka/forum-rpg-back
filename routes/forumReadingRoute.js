const router = require("express").Router();

const forumReadController = require("../controllers/forumReadingController");

router
  .route("/reading")
  .post((req, res) => forumReadController.create(req, res));

router
  .route("/reading")
  .get((req, res) => forumReadController.getAll(req, res));

router
  .route("/reading/:id")
  .get((req, res) => forumReadController.get(req, res));

router
  .route("/reading/:id")
  .delete((req, res) => forumReadController.delete(req, res));

router
  .route("/reading/:id")
  .put((req, res) => forumReadController.update(req, res));

router
  .route("/reading/posts/:id")
  .get((req, res) => forumReadController.getGroupPosts(req, res));

module.exports = router;
