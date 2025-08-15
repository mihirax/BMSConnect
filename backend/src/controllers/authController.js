const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const {
  generateAccessToken,
  generateRefreshToken
} = require("../utils/generateToken");
require("dotenv").config();

const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }
    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ message: "User exists" });

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, password: hashed, role });
    res.status(201).json({ message: "User created", userId: user._id });
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

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    const payload = { id: user._id, email: user.email, role: user.role };
    const accessToken = generateAccessToken(payload, process.env.JWT_ACCESS_SECRET, process.env.ACCESS_TOKEN_EXPIRES_IN);
    const refreshToken = generateRefreshToken(payload, process.env.JWT_REFRESH_SECRET, process.env.REFRESH_TOKEN_EXPIRES_IN);

    // store refresh token in user's doc
    user.refreshTokens.push({ token: refreshToken });
    await user.save();

    res.json({ accessToken, refreshToken });
  } catch (err) {
    next(err);
  }
};

const refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(400).json({ message: "No refresh token" });

    // verify signature
    let payload;
    try {
      payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    } catch (err) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    const user = await User.findById(payload.id);
    if (!user) return res.status(401).json({ message: "Invalid token user" });
    // check token exists (simple revocation strategy)
    const exists = user.refreshTokens.some(t => t.token === refreshToken);
    if (!exists) return res.status(401).json({ message: "Token revoked" });

    const newAccessToken = generateAccessToken({ id: user._id, email: user.email, role: user.role }, process.env.JWT_ACCESS_SECRET, process.env.ACCESS_TOKEN_EXPIRES_IN);
    res.json({ accessToken: newAccessToken });
  } catch (err) {
    next(err);
  }
};

const logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(400).json({ message: "No refresh token" });
    // remove refresh token from DB
    await User.updateOne({ "refreshTokens.token": refreshToken }, { $pull: { refreshTokens: { token: refreshToken } } });
    res.json({ message: "Logged out" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
  login,
  refresh,
  logout
};
