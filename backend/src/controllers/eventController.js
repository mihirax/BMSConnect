const Event = require("../models/Event");
const User = require("../models/User");
const { canManageEvent } = require("../middleware/authMiddleware");

// create/update/delete/list/get from Phase-2 remain;
// add registration/extend logic + auto-expire on reads.

exports.createEvent = async (req, res, next) => {
  try {
    const {
      name, description, startAt, endAt, location, category, club,
      visibility, capacity, registrationDeadline
    } = req.body;

    if (!name || !startAt || !endAt || !club || !registrationDeadline) {
      return res.status(400).json({ message: "name, startAt, endAt, club, registrationDeadline required" });
    }

    const event = await Event.create({
      name, description, startAt, endAt, location, category,
      club, visibility, capacity,
      registrationDeadline,
      createdBy: req.user.id
    });

    res.status(201).json({ message: "Event created", event });
  } catch (err) { next(err); }
};

exports.updateEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    const user = await User.findById(req.user.id).select("role clubsAssigned");
    const ok = canManageEvent({ user, event, userClubs: user?.clubsAssigned || [] });
    if (!ok) return res.status(403).json({ message: "Forbidden" });

    const fields = ["name","description","startAt","endAt","location","category","club","visibility","capacity","registrationDeadline"];
    fields.forEach(f => { if (req.body[f] !== undefined) event[f] = req.body[f]; });

    // flip status if deadline moved in the past/future
    if (event.isExpired() && event.status !== "expired") event.status = "expired";
    if (!event.isExpired() && event.status !== "active") event.status = "active";

    await event.save();
    res.json({ message: "Event updated", event });
  } catch (err) { next(err); }
};

exports.deleteEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    const user = await User.findById(req.user.id).select("role clubsAssigned");
    const ok = canManageEvent({ user, event, userClubs: user?.clubsAssigned || [] });
    if (!ok) return res.status(403).json({ message: "Forbidden" });

    await event.deleteOne();
    res.json({ message: "Event deleted" });
  } catch (err) { next(err); }
};

// Public get with lazy expiration
exports.getEventById = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id).populate("club", "name").populate("createdBy", "name email");
    if (!event) return res.status(404).json({ message: "Event not found" });

    if (event.isExpired() && event.status !== "expired") {
      event.status = "expired";
      await event.save();
    }
    res.json({ event });
  } catch (err) { next(err); }
};

exports.listEvents = async (req, res, next) => {
  try {
    const { club, from, to, visibility, status } = req.query;
    const q = {};
    if (club) q.club = club;
    if (visibility) q.visibility = visibility;
    if (status) q.status = status;
    if (from || to) {
      q.startAt = {};
      if (from) q.startAt.$gte = new Date(from);
      if (to) q.startAt.$lte = new Date(to);
    }
    let events = await Event.find(q).sort({ startAt: 1 }).populate("club", "name");

    // lazy expire pass
    const updates = [];
    events.forEach(ev => {
      if (ev.isExpired() && ev.status !== "expired") {
        ev.status = "expired";
        updates.push(ev.save());
      }
    });
    if (updates.length) await Promise.all(updates);

    res.json({ events });
  } catch (err) { next(err); }
};

// Member registers for event (before deadline, capacity respected)
exports.registerForEvent = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    if (event.isExpired() || event.status === "expired") {
      return res.status(400).json({ message: "Registration closed" });
    }
    if (event.capacity && event.participants.length >= event.capacity) {
      return res.status(400).json({ message: "Event is full" });
    }
    if (event.participants.map(String).includes(String(userId))) {
      return res.status(409).json({ message: "Already registered" });
    }

    event.participants.push(userId);
    await event.save();

    await User.findByIdAndUpdate(userId, { $addToSet: { eventsRegistered: event._id } });
    res.json({ message: "Registered for event" });
  } catch (err) { next(err); }
};

// Extend registration deadline (core/admin)
exports.extendDeadline = async (req, res, next) => {
  try {
    const { registrationDeadline } = req.body;
    if (!registrationDeadline) return res.status(400).json({ message: "registrationDeadline required" });

    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    event.registrationDeadline = registrationDeadline;
    event.status = new Date() > new Date(registrationDeadline) ? "expired" : "active";
    await event.save();
    res.json({ message: "Deadline updated", event });
  } catch (err) { next(err); }
};
