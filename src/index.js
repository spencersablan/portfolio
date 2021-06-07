const path = require('path')
const express = require('express')

const app = express()

const PORT = process.env.PORT
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))