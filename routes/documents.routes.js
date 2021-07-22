const express = require('express')
const router = express.Router()

const documentsController = require('../controllers/documents.controller.js')

router.post('/add', documentsController.add)
/* 
router.get('/getAll', documentsController.getAllUsers)

router.get('/get/:id', documentsController.getUserById) */


module.exports = router