const authController = {
  loginSucces: (req, res) => {
    console.log(req.user)
    if (req.user) {
      return res.status(200).json({
        success: true,
        message: "user has successfully authenticated",
        user: req.user,
        cookies: req.cookies,
      });
    } else {
      return res.status(400).json({ message: "Dont logged." });
    }
  },

  loginFailed: (req, res) => {
    return res.status(401).json({
      success: false,
      message: "user failed to authenticate.",
    });
  },

  logout: (req, res) => {
    req.logout();
    return res.redirect("http://localhost:3000");
  },
};

module.exports = authController;
