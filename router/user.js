const express = require('express');
const router = express.Router();
const userController = require('../controller/user');
const passport = require('passport');


router.get('/', passport.checkAuthentication ,userController.user);
router.get('/sign-in', userController.signIn);
router.get('/sign-up', userController.signUp);


router.post('/sign-up-crediantial', userController.userSignUp);
//use passport as a middleware to auth

router.post('/sign-in-crediantial',passport.authenticate('local', {failureRedirect: '/user/sign-in' }),userController.userSignIn);

router.get('/sign-out', userController.destroySession);
module.exports = router;