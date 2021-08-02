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
    
    
                                                    
    const newDocument = {
      name,
      url: secure_url,
      userId: user._id,
    };

     try {
      const documentCreated = await new Document(newDocument).save();
      user.documents = user.documents.concat(documentCreated._id);

      await user.save();
      return res
        .status(200)
        .json({ message: "Documento creado correctamente." });

            
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }   

   
  },
  getDocumentsByUserId: async (req,res)=>{
    const {userId} = req.body
  
    try {
      const documents = await Document.find({}).where('userId').equals(userId).populate("users");
      return res.status(200).json(documents);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
   
  }, 
  getDocumentById: async (req,res)=>{
    const {id} = req.body
    try {
      const document = await Document.findById(id)
      return res.status(200).json(document)
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  deleteDocument: async (req, res) => {
    const {id} = req.params
    try {
      const documentToDelete = await Document.findById({_id:id})
      const user = await User.findById(documentToDelete.userId);
      const newDocuments = user.documents.filter(doc => JSON.stringify(doc) !== JSON.stringify(id))
      user.documents = newDocuments;
      await user.save();
      const response = await Document.findByIdAndDelete(id)
      
      res.status(200).json(response).end()
    } catch (error) {
      res.status(400).json({message:"No se pudo eliminar el documento."}).res.end()
    }
   
  }
};




const removeTmp = (path)=>{
  fs.unlink(path, err=>{
      if(err) throw err
  })
}

module.exports = documentsController;

/*  try {
          fs.unlinkSync('./tmp')
          console.log('carpeta removida')
        } catch(err) {
          console.error('Something wrong happened removing the file', err)
        }   */ 