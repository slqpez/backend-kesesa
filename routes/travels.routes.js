const express = require('express')
const router = express.Router()

const travelsController = require('../controllers/travels.controller.js')

router.post('/addTravel', travelsController.addTravel)
 
router.post('/getTravels', travelsController.getTravelsByUserId)
/* router.post('/getDocument', travelsController.getTravelById) */
router.delete('/deleteTravel/:id', travelsController.deleteTravel)
 



module.exports = router