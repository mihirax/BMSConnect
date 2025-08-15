const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const authController = require("../controllers/authController");

// UPDATED: Added validation middleware to the register route
router.post(
  "/register",
  [
    body("name", "Name is required").not().isEmpty(),
    body("email", "Please include a valid email").isEmail(),
    body("password", "Password must be 6 or more characters").isLength({ min: 6 }),
  ],
  authController.register
);

router.post("/login", authController.login);
router.post("/refresh", authController.refresh);
router.post("/logout", authController.logout);

// ADDED: New route for handling email verification
router.post("/verify-email/:token", authController.verifyEmail);

module.exports = router;