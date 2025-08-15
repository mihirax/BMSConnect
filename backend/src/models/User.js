const mongoose = require("mongoose");
const crypto = require("crypto"); // Import crypto for token generation

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
  
  // ADDED: Fields for email verification
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String, select: false },
  verificationTokenExpires: { type: Date, select: false },

  clubsAssigned: [{ type: mongoose.Schema.Types.ObjectId, ref: "Club" }],
  clubsJoined: [{ type: mongoose.Schema.Types.ObjectId, ref: "Club" }],
  clubsApplied: [{ type: mongoose.Schema.Types.ObjectId, ref: "Club" }],
  eventsRegistered: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
  refreshTokens: [RefreshTokenSchema]
}, { timestamps: true });

// ADDED: Method to generate the verification token
UserSchema.methods.getVerificationToken = function () {
  const token = crypto.randomBytes(20).toString("hex");

  this.verificationToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
  
  // Set token to expire in 15 minutes
  this.verificationTokenExpires = Date.now() + 15 * 60 * 1000;

  return token;
};


module.exports = mongoose.model("User", UserSchema);