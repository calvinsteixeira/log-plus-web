// IMPORTS

const express = require('express')
const routes = require('./routes/routes.js')
const bodyParser = require('body-parser')


// setting configs
const app = express()
app.use(bodyParser.json({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

// setup routes
routes(app)

// starting the server
const port = 3000
app.listen(port, () => {
  console.log('Server is up and running at port ' + port)
})
