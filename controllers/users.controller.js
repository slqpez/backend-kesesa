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
      await new User(newUser).save();
      return res.status(201).json({ message: "Usuario creado correctamente." });
    } catch (error) {
      if (error.code === 11000) {
        return res
          .status(400)
          .json({ message: "El correo ingresado ya existe." });
      }
      return res.status(400).json({ message: error.message }).end();
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.find({}).populate("documents");
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  getUserById: async (req, res) => {
    const { id } = req.params;

    try {
      const userFinded = await User.findById(id);
      if (!userFinded) {
        return res
          .status(404)
          .json({ message: "El usuario no existe en la base de datos." });
      }

      return res.status(200).json(userFinded);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};

module.exports = userController;
