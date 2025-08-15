const express = require("express");
const router = express.Router();
const { verifyAccessToken, requireRole } = require("../middleware/authMiddleware");
const e = require("../controllers/eventController");

// CRUD
router.post("/", verifyAccessToken, requireRole("club_head"), e.createEvent);
router.put("/:id", verifyAccessToken, requireRole("club_head"), e.updateEvent);
router.delete("/:id", verifyAccessToken, requireRole("club_head"), e.deleteEvent);

// Public
router.get("/", e.listEvents);
router.get("/:id", e.getEventById);

// Registration
router.post("/:id/register", verifyAccessToken, e.registerForEvent);

// Extend deadline (core/admin)
router.patch("/:id/extend-deadline", verifyAccessToken, requireRole("core_member"), e.extendDeadline);

module.exports = router;
