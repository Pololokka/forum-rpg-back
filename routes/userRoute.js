const router = require("express").Router();

const userController = require("../controllers/userController");

router.route("/register").post((req, res) => userController.create(req, res));

router.route("/register").get((req, res) => userController.getAll(req, res));

router.route("/login").post((req, res) => userController.login(req, res));

router.route("/update/:id").put((req, res) => userController.update(req, res));

module.exports = router;
