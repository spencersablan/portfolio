const path = require('path')
const express = require('express')

const contactRouter = require('./routes/contact')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static(publicDirectoryPath))

app.use(contactRouter)

module.exports = app