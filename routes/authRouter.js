const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signin', authController.signin_get);
router.post('/signup', authController.signup_get);
