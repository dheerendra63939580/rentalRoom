const express = require('express')
const router = express.Router();
const User = require('../models/user.js')
const passport = require('passport');
const {saveRedirectUrl} = require('../middleware/middleware.js')
const userController = require('../controllers/userController.js');
const wrapAsync = require('../utils/wrapAsync.js');

router.route('/signup')
    .get(userController.signUpForm)
    .post(userController.postSignUpData)
router.route('/login')
    .get(userController.loginForm)
    .post(saveRedirectUrl,
        passport.authenticate("local",{failureRedirect: "/login",failureFlash: true}),
        userController.postLogInData)
router.get('/logout',userController.logout)

module.exports = router;
