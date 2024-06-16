const homeController = require("../controllers/home");

const router = require('express').Router();
router.get(["/","/home"], homeController.homeView);

module.exports = router;
