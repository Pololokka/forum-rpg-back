const router = require("express").Router();

const forumGmController = require("../controllers/forumGMController");

router.route("/gm").post((req, res) => forumGmController.create(req, res));

router.route("/gm").get((req, res) => forumGmController.getAll(req, res));

router.route("/gm/:id").get((req, res) => forumGmController.get(req, res));

router
  .route("/gm/:id")
  .delete((req, res) => forumGmController.delete(req, res));

router.route("/gm/:id").put((req, res) => forumGmController.update(req, res));

module.exports = router;
