const User = require("../models/User.js");

const userController = {
  addUser: async (req, res) => {
    const { name, email, password } = req.body;

    const newUser = {
      name,
      password,
      email,
    };

    try {
      const userCreated = await new User(newUser).save();
      res.status(201).json({ message: "Usuario creado correctamente." }).end();
    } catch (error) {
      if (error.code === 11000) {
        res
          .status(400)
          .json({ message: "El correo ingresado ya existe." })
          .end();
        return;
      }
      res.status(400).json({ message: error.message }).end();
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.find({}).populate("documents");
      res.status(200).json(users).end();
    } catch (error) {
      res.status(400).json({ message: error.message }).end();
    }
  },

  getUserById: async (req, res) => {
    const { id } = req.params;

    try {
      const userFinded = await User.findById(id);
      if (!userFinded) {
        res
          .status(404)
          .json({ message: "El usuario no existe en la base de datos." })
          .end();
        return;
      }

      res.status(200).json(userFinded).end();
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message }).end();
    }
  },
};

module.exports = userController;
