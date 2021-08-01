const express = require('express')
const router = express.Router()

const documentsController = require('../controllers/documents.controller.js')

router.post('/add', documentsController.add)
 
router.post('/getDocuments', documentsController.getDocumentsByUserId)




module.exports = router