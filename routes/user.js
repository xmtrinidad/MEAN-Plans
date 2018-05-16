const express = require('express');
const router = express.Router();
const passport = require('passport');
const user_controller = require('../controllers/userController');

router.post('/register', user_controller.user_register);

module.exports = router;