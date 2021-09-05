const Document = require("../models/Document.js");
const User = require("../models/User.js");
const Travel = require("../models/Travel.js");
const uploadDocument = require('../utils/uploadDocument.js');

const fs = require('fs')

const documentsController = {
  add: async (req, res) => {
    const { name, userId, travelId } = req.body;

    const user = await User.findById(userId);
    const travel = await Travel.findById(travelId)
    

    const file = req.files.file
   

     const {secure_url} = await uploadDocument(file)
    
    
                                                    
    const newDocument = {
      name,
      url: secure_url,
      userId: user._id,
      travelId: travel._id
    };

     try {
      const documentCreated = await new Document(newDocument).save();
      user.documents = user.documents.concat(documentCreated._id);
      travel.documents = travel.documents.concat(documentCreated._id);

      await user.save();
      await travel.save()
      return res
        .status(200)
        .json({ message: "Documento creado correctamente." });

            
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }   

   
  },
  getDocumentsByTravelId: async (req,res)=>{
    const {travelId} = req.body
  
    try {
      const documents = await Document.find({}).where('travelId').equals(travelId).populate("users").populate("travels");
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
      const travel = await Travel.findById(documentToDelete.travelId);
      const newDocuments = user.documents.filter(doc => JSON.stringify(doc) !== JSON.stringify(id))
      const newDocumentsForTravel = travel.documents.filter(doc => JSON.stringify(doc) !== JSON.stringify(id))

      user.documents = newDocuments;
      travel.documents = newDocumentsForTravel;
      await user.save();
      await travel.save()
      const response = await Document.findByIdAndDelete(id)
      
      res.status(200).json(response).end()
    } catch (error) {
      res.status(400).json({message:"No se pudo eliminar el documento."}).end()
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