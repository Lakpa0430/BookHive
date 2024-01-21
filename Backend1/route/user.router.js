const express = require('express');
const  apiUser  = require('../controllers/user.controller.js');
const router = express.Router();

router.get('/apiUser', apiUser);

module.exports = router