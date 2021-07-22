const express = require('express')
const router = express.Router()

const userController = require('../controllers/users.controller.js')


router.get('/getAll', userController.getAllUsers)

router.get('/get/:id', userController.getUserById)

router.post('/add', userController.addUser)

module.exports = router