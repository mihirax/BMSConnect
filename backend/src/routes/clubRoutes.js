const express = require("express");
const router = express.Router();
const { verifyAccessToken, requireRole } = require("../middleware/authMiddleware");
const c = require("../controllers/clubController");

// Create/list/details
router.post("/", verifyAccessToken, requireRole("core_member"), c.createClub);
router.get("/", c.getClubs);
router.get("/:id", c.getClubById);

// Configure registration (core/admin)
router.patch("/:id/configure-registration",
  verifyAccessToken, requireRole("core_member"), c.configureRegistration);

// Apply / Join (members)
router.post("/:id/apply", verifyAccessToken, c.applyToClub);
router.post("/:id/join", verifyAccessToken, c.joinClubDirect);

// Decide applicant (core/admin; you can restrict to club_head of this club if desired)
router.post("/:id/decide", verifyAccessToken, requireRole("core_member"), c.decideApplicant);

module.exports = router;
