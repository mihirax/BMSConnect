const express = require('express');
const router = express.Router();
const { addUser } = require('./user-controller');

router.post('/users', addUser);

module.exports = router;
