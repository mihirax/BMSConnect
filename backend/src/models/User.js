const mongoose = require("mongoose");

const RefreshTokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "core_member", "club_head", "event_head", "member"],
    default: "member"
  },
  clubsAssigned: [{ type: mongoose.Schema.Types.ObjectId, ref: "Club" }], // heads
  // member-facing
  clubsJoined: [{ type: mongoose.Schema.Types.ObjectId, ref: "Club" }],
  clubsApplied: [{ type: mongoose.Schema.Types.ObjectId, ref: "Club" }],
  eventsRegistered: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
  refreshTokens: [RefreshTokenSchema]
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
