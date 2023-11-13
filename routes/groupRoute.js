const router = require("express").Router();

const groupController = require("../controllers/groupController");

router.route("/group").post((req, res) => groupController.create(req, res));

router.route("/group").get((req, res) => groupController.getAll(req, res));

router.route("/group/:id").get((req, res) => groupController.get(req, res));

module.exports = router;
