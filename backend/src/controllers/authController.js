const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { validationResult } = require("express-validator");
const User = require("../models/User");
const {
  generateAccessToken,
  generateRefreshToken
} = require("../utils/generateToken");
require("dotenv").config();

const register = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ message: "User exists" });

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, password: hashed, role: "member" });

    const verificationToken = user.getVerificationToken();
    await user.save({ validateBeforeSave: false });

    // In a real app, you would use a service like SendGrid to email this link.
    const verificationUrl = `http://localhost:5173/verify-email/${verificationToken}`;
    console.log("----------- EMAIL VERIFICATION LINK -----------");
    console.log(`(This is a simulation) Please visit this URL to verify your email: ${verificationUrl}`);
    console.log("---------------------------------------------");

    res.status(201).json({ message: "Registration successful. Please check your email (and the backend console) to verify your account." });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Missing fields" });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    // ADDED: Check if user is verified
    if (!user.isVerified) {
      return res.status(401).json({ message: "Please verify your email before logging in." });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    const payload = { id: user._id, email: user.email, role: user.role };
    const accessToken = generateAccessToken(payload, process.env.JWT_ACCESS_SECRET, process.env.ACCESS_TOKEN_EXPIRES_IN);
    const refreshToken = generateRefreshToken(payload, process.env.JWT_REFRESH_SECRET, process.env.REFRESH_TOKEN_EXPIRES_IN);

    user.refreshTokens.push({ token: refreshToken });
    await user.save();

    // UPDATED: Return user object with tokens
    res.json({
      accessToken,
      refreshToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    next(err);
  }
};

// ADDED: New function to handle email verification
const verifyEmail = async (req, res, next) => {
  try {
    const verificationToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      verificationToken,
      verificationTokenExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired verification token." });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpires = undefined;
    await user.save();

    res.json({ message: "Email verified successfully. You can now log in." });
  } catch (err) {
    next(err);
  }
};


const refresh = async (req, res, next) => {
  // ... (this function remains the same)
};

const logout = async (req, res, next) => {
  // ... (this function remains the same)
};

// UPDATED: Export the new verifyEmail function
module.exports = {
  register,
  login,
  refresh,
  logout,
  verifyEmail,
};