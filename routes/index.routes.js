const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/authentication.js");

router.get("/", isAuthenticated, (req, res) => {

  res.send("<a href='https://backend-kesesa.herokuapp.com/auth/google'>Iniciar sesión</a>")
 /*  return res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies
  }); */
});



module.exports = router;
