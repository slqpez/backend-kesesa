const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    
    name:{
        type: 'string',
        trim: true,
        required:[true, "Por favor ingrese un nombre."]
    },

    email:{
        type: 'string',
        trim: true,
        required:[true, "Por favor ingrese un correo."],
        unique: true,
    },
    profileImage:{
        type: 'string',
        trim: true,
    },

    documents: [{ type: Schema.Types.ObjectId, ref: 'Document' }]
})



module.exports = mongoose.model("User", UserSchema)