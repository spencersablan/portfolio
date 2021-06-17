const express = require('express')
const router = new express.Router()
const { userConnectionEmails } = require('../controllers/email') 

// POST request to send email
router.post('/', userConnectionEmails)

module.exports = router