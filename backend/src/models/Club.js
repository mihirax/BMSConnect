const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  description: { type: String, default: "" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  // registration control
  registrationType: {
    type: String,
    enum: ["audition", "direct", "closed"],
    default: "closed"
  },
  registrationDeadline: { type: Date, default: null },

  // relationships
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
}, { timestamps: true });

ClubSchema.index({ name: 1 });

module.exports = mongoose.model("Club", ClubSchema);
