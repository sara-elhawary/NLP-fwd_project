const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const fetch = require('isomorphic-fetch')
const he = require('he')

const app = express()
const port = 8081
const key = 'a1548456363cd650b1bdb2dd425e144a'
console.log(__dirname)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static(path.join(__dirname, '../client')))

app.listen(port, function () {
  console.log(`App is runnig on port ${port} `)
})

let projectData = {}

app.get('/', function (req, res) {
  res.sendFile('/client/views/index.html', { root: __dirname + '/..' })
})

app.post('/analyze-article', function (req, res) {
  // 1-Extract article URL from
  // 2-extract text content for client URL ,using Regex and he lib.
  let clientURL = req.body
  fetch(clientURL)
    .then((response) => response.text())
    .then((response) => {
      const stripedHTML = response.replace('<[^>]+>/g', ' ')
      const decodedStripedHTML = he.decode(stripedHTML)
    })
  // 3-analyze article using meaning cloud API,with text content and license key
  // 4-Return acquired data back to client through projectData object
  const meaningCloudURL = `api.meaningcloud.com/sentiment-2.1?key=${key}&lang=<lang>&txt=${decodedStripedHTML}&model=<model>`
  fetch(meaningCloudURL, {
    method: 'POST',
    headers: {},
    // maxRedirects: 20,
  })
    .then((response) => response.json())
    .then((response) => {
      projectData = {
        agreement: response.agreement,
        subjectivity: response.subjectivity,
        confidence: response.confidence,
        irony: response.irony,
      }
      res.send({ status: 'success' })
    })
    .catch((error) => console.log(error))
})

app.get('/updateData', function (req, res) {
  res.send(projectData)
})
