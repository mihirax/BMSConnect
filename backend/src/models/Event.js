const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, default: "" },
  location: { type: String, default: "" },
  category: { type: String, default: "general" },

  club: { type: mongoose.Schema.Types.ObjectId, ref: "Club", required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  startAt: { type: Date, required: true },
  endAt: { type: Date, required: true },

  registrationDeadline: { type: Date, required: true },

  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  status: { type: String, enum: ["active", "expired"], default: "active" },
  visibility: { type: String, enum: ["public", "private"], default: "public" },
  capacity: { type: Number, default: 0 }
}, { timestamps: true });

// cheap auto-expire on reads/writes:
EventSchema.methods.isExpired = function () {
  return this.registrationDeadline && new Date() > new Date(this.registrationDeadline);
};

EventSchema.index({ club: 1, startAt: 1 });
EventSchema.index({ registrationDeadline: 1 });

module.exports = mongoose.model("Event", EventSchema);
