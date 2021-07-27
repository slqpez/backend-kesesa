require("../config/passport.config");

const passport = require("passport");


const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth.controller.js')



router.get("/login/success", authController.loginSucces);
router.get("/login/failed", authController.loginFailed );
router.get("/logout", authController.logout);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "https://frontend-kesesa.vercel.app",
    failureRedirect: "/auth/login/failed",
  })
);



module.exports = router;
