const Document = require("../models/Document.js");
const Travel = require("../models/Travel.js");
const User = require("../models/User.js");


const travelsController = {

  addTravel: async (req, res) => {
    const { name, userId } = req.body;

    const user = await User.findById(userId);
    
    
                                                    
    const newTravel = {
      name,
      userId: user._id,
    };

     try {
      const travelCreated = await new Travel(newTravel).save();
      user.travels = user.travels.concat(travelCreated._id);

      await user.save();
      return res
        .status(200)
        .json({ message: "Viaje creado correctamente." });

            
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }   

   
  },
  getTravelsByUserId: async (req,res)=>{
    const {userId} = req.body
  
    try {
      const travels = await Travel.find({}).where('userId').equals(userId).populate("users").populate("documents");
      return res.status(200).json(travels);
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

  deleteTravel: async (req, res) => {
    const {id} = req.params

   
    try {
      let travelToDelete = await Travel.findById({_id:id})
      let user = await User.findById(travelToDelete.userId);
      let documents = await Document.find({})
      let newTravels = user.travels.filter(doc => JSON.stringify(doc) !== JSON.stringify(id))
      let documentsTravel = travelToDelete.documents
      let newDocumentsUser =  user.documents.filter(doc=> !documentsTravel.includes(doc))
      let newDocuments = documents.filter(doc=>{!documentsTravel.includes(doc._id)})

      user.travels = newTravels;
      user.documents = newDocumentsUser;
     

      for(let doc of documentsTravel){
        await Document.findByIdAndDelete(doc)
      }
      

      await user.save();
      
    
      const response = await Travel.findByIdAndDelete(id) 

      
      return res.status(200).json(response).end()  
     

    } catch (error) {
      console.log(error)
      return res.status(400).json({message:"No se pudo eliminar el viaje."}).end()
    }
   
  }
};


module.exports = travelsController;

