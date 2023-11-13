const router = require("express").Router();

const groupController = require("../controllers/groupController");

router.route("/group").post((req, res) => groupController.create(req, res));

module.exports = router;
