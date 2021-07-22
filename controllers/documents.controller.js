const Document = require("../models/Document.js");
const User = require("../models/User.js");
const uploadDocument = require('../utils/uploadDocument.js');

const fs = require('fs')

const documentsController = {
  add: async (req, res) => {
    const { name, userId } = req.body;

    const user = await User.findById(userId);
    

    const file = req.files.file
    const {secure_url} = await uploadDocument(file)
    
                                                    //TODO Login with Google.
    const newDocument = {
      name,
      url: secure_url,
      userId: user._id,
    };

     try {
      const documentCreated = await new Document(newDocument).save();
      user.documents = user.documents.concat(documentCreated._id);

      await user.save();
      res
        .status(200)
        .json({ message: "Documento creado correctamente." })
        .end();

        try {
          fs.unlinkSync('./tmp')
          console.log('carpeta removida')
        } catch(err) {
          console.error('Something wrong happened removing the file', err)
        }        
    } catch (error) {
      res.status(400).json({ message: error.message }).end();
    } 

   
  },
};


const removeTmp = (path)=>{
  fs.unlink(path, err=>{
      if(err) throw err
  })
}

module.exports = documentsController;
