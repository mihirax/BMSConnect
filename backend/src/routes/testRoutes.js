const express = require("express");
const router = express.Router();
const { verifyAccessToken } = require("../middleware/authMiddleware");
const testController = require("../controllers/testController");

router.get("/protected", verifyAccessToken, testController.protected);

module.exports = router;
