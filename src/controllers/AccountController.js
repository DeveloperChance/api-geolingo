const express = require('express');
const nodemailer = require('nodemailer');
const auth = require('../middleware/auth');
const db = require('../db/database');
const router = express.Router();

module.exports = router;