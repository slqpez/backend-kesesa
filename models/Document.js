const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocumentSchema = new mongoose.Schema({
  name: {
    type: "string",
    trim: true,
    required: [true, "Por favor ingrese un nombre."],
  },

  url: {
    type: "string",
    trim: true,
    required: [true, "Por favor ingrese una URL."],
  },

  travelId: {
    type: Schema.Types.ObjectId,
    ref: "Travel",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Document", DocumentSchema);
