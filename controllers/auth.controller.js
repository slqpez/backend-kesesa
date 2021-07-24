
const authController ={

    loginSucces:  (req, res) => {
        if (req.user) {
          res.status(200).json({
            success: true,
            message: "user has successfully authenticated",
            user: req.user,
            cookies: req.cookies,
          });
        }
      },

      loginFailed: (req, res) => {
        res.status(401).json({
          success: false,
          message: "user failed to authenticate.",
        });
      },

      logout: (req, res) => {
        req.logout();
        res.redirect(process.env.CLIENT_URL)
      },

      
}

module.exports = authController;