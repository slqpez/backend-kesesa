const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TravelSchema = new mongoose.Schema({
  name: {
    type: "string",
    trim: true,
    required: [true, "Por favor ingrese un nombre."],
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  documents: [{ type: Schema.Types.ObjectId, ref: 'Document' }]
});

module.exports = mongoose.model("Travel", TravelSchema);
