const jwt = require("jsonwebtoken");

const generateAccessToken = (payload, secret, expiresIn) =>
  jwt.sign(payload, secret, { expiresIn });

const generateRefreshToken = (payload, secret, expiresIn) =>
  jwt.sign(payload, secret, { expiresIn });

module.exports = {
  generateAccessToken,
  generateRefreshToken
};
