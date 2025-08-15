const Club = require("../models/Club");
const User = require("../models/User");

// Create club (core/admin)
exports.createClub = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    if (!name) return res.status(400).json({ message: "Club name required" });
    const exists = await Club.findOne({ name });
    if (exists) return res.status(409).json({ message: "Club already exists" });

    const club = await Club.create({ name, description, createdBy: req.user.id });
    res.status(201).json({ message: "Club created", club });
  } catch (err) { next(err); }
};

// List clubs (public or protected—your choice)
exports.getClubs = async (req, res, next) => {
  try {
    const clubs = await Club.find().sort({ createdAt: -1 });
    res.json({ clubs });
  } catch (err) { next(err); }
};

// Get club details (with members count & applicants count)
exports.getClubById = async (req, res, next) => {
  try {
    const club = await Club.findById(req.params.id)
      .populate("members", "name email")
      .populate("applicants", "name email");
    if (!club) return res.status(404).json({ message: "Club not found" });
    res.json({ club });
  } catch (err) { next(err); }
};

// Open/Configure registration (core/admin)
// body: { registrationType: "audition"|"direct"|"closed", registrationDeadline?: ISO }
exports.configureRegistration = async (req, res, next) => {
  try {
    const { registrationType, registrationDeadline } = req.body;
    if (!["audition","direct","closed"].includes(registrationType)) {
      return res.status(400).json({ message: "Invalid registrationType" });
    }
    const club = await Club.findById(req.params.id);
    if (!club) return res.status(404).json({ message: "Club not found" });

    club.registrationType = registrationType;
    club.registrationDeadline = registrationDeadline || null;
    await club.save();
    res.json({ message: "Registration updated", club });
  } catch (err) { next(err); }
};

// Apply to club (audition only + before deadline)
exports.applyToClub = async (req, res, next) => {
  try {
    const club = await Club.findById(req.params.id);
    if (!club) return res.status(404).json({ message: "Club not found" });

    if (club.registrationType !== "audition") {
      return res.status(400).json({ message: "Applications are not open for audition" });
    }
    if (!club.registrationDeadline || new Date() > new Date(club.registrationDeadline)) {
      return res.status(400).json({ message: "Applications closed" });
    }

    const userId = req.user.id;
    if (club.members.includes(userId)) return res.status(409).json({ message: "Already a member" });
    if (club.applicants.includes(userId)) return res.status(409).json({ message: "Already applied" });

    club.applicants.push(userId);
    await club.save();

    await User.findByIdAndUpdate(userId, { $addToSet: { clubsApplied: club._id } });
    res.json({ message: "Applied to club" });
  } catch (err) { next(err); }
};

// Direct join (direct only)
exports.joinClubDirect = async (req, res, next) => {
  try {
    const club = await Club.findById(req.params.id);
    if (!club) return res.status(404).json({ message: "Club not found" });

    if (club.registrationType !== "direct") {
      return res.status(400).json({ message: "Direct join not allowed" });
    }

    const userId = req.user.id;
    if (club.members.includes(userId)) return res.status(409).json({ message: "Already a member" });

    club.members.push(userId);
    // If user had applied earlier (edge), remove from applicants
    club.applicants = club.applicants.filter(a => String(a) !== String(userId));
    await club.save();

    await User.findByIdAndUpdate(userId, {
      $addToSet: { clubsJoined: club._id },
      $pull: { clubsApplied: club._id }
    });

    res.json({ message: "Joined club" });
  } catch (err) { next(err); }
};

// Approve/Reject applicant (core/admin or club_head of that club—optional stricter check)
exports.decideApplicant = async (req, res, next) => {
  try {
    const { decision, userId } = req.body; // "approve" | "reject"
    const club = await Club.findById(req.params.id);
    if (!club) return res.status(404).json({ message: "Club not found" });

    const isApplicant = club.applicants.map(String).includes(String(userId));
    if (!isApplicant) return res.status(400).json({ message: "User is not an applicant" });

    if (decision === "approve") {
      club.members.push(userId);
      club.applicants = club.applicants.filter(a => String(a) !== String(userId));
      await club.save();
      await User.findByIdAndUpdate(userId, {
        $addToSet: { clubsJoined: club._id },
        $pull: { clubsApplied: club._id }
      });
      return res.json({ message: "Applicant approved" });
    } else if (decision === "reject") {
      club.applicants = club.applicants.filter(a => String(a) !== String(userId));
      await club.save();
      await User.findByIdAndUpdate(userId, { $pull: { clubsApplied: club._id } });
      return res.json({ message: "Applicant rejected" });
    }

    res.status(400).json({ message: "Invalid decision" });
  } catch (err) { next(err); }
};
