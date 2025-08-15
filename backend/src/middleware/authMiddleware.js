const jwt = require("jsonwebtoken");
require("dotenv").config();

const roleHierarchy = {
  admin: 4,
  core_member: 3,
  club_head: 2,
  event_head: 2,
  member: 1
};

const verifyAccessToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token" });
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.user = payload; // { id, email, role }
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

const requireRole = (minRole) => (req, res, next) => {
  if (!req.user) return res.status(401).json({ message: "Unauthorized" });
  if (roleHierarchy[req.user.role] < roleHierarchy[minRole]) {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
};

// Utility to check if user can manage an event (admin/core or same club/owner)
const canManageEvent = ({ user, event, userClubs = [] }) => {
  if (!user) return false;
  if (user.role === "admin" || user.role === "core_member") return true;
  const sameOwner = String(event.createdBy) === String(user.id);
  const sameClub = userClubs.map(String).includes(String(event.club));
  return (user.role === "club_head" || user.role === "event_head") && (sameOwner || sameClub);
};

module.exports = {
  verifyAccessToken,
  requireRole,
  canManageEvent,
  roleHierarchy
};
