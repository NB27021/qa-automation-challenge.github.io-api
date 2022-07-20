const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const morgan = require('morgan')
const xml = require("xml")
const app = express()

app.use(fileUpload({ createParentPath: true }))

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 5000

app.listen(port)

var productsRoutes = require('./routes/products')
var usersRoutes = require('./routes/users')
var discountsRoutes = require('./routes/discounts')
var plansRoutes = require('./routes/plans')
var campaignsRoutes = require('./routes/campaigns')
var multipartRoutes = require('./routes/multipart')
var contactsRoutes = require('./routes/contacts')

productsRoutes(app)
usersRoutes(app)
discountsRoutes(app)
plansRoutes(app)
campaignsRoutes(app)
multipartRoutes(app)
contactsRoutes(app)

console.log('Sandbox REST API started on: ' + port)
