const cloudinary = require('../config/cloudinary.config.js')


 function uploadDocument(file) {
       

    const response =  cloudinary.uploader.upload(file.tempFilePath, {
        folder: "documents",
     }, )
     .then((res) =>{
        return res
     }).catch((err) =>console.log(err))
     

     return response
    
}

module.exports = uploadDocument;