const express = require('express')
const router = express.Router()

const userControl = require('../controller/user')

router.get('/get', 
userControl.getUser)

router.post('/post', 
userControl.postUser)

router.patch('/update/:id', 
userControl.updateUser)

router.delete('/delete/:id', 
userControl.deleteOne)

module.exports = router