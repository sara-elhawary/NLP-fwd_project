const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()
const port = 8080
console.log(__dirname)
app.use(express.static(path.join(__dirname, '../client')))

app.listen(port, function () {
  console.log(`App is runnig on port ${port} `)
})

app.get('/', function (req, res) {
  res.sendFile('/client/views/index.html', { root: __dirname + '/..' })
})
