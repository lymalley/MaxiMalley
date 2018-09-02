require('dotenv').config()
const PORT = process.env.PORT
const express = require('express')
var jwt = require('express-jwt')
var jwks = require('jwks-rsa')
const bodyParser = require('body-parser')
const picks = require('./routes/picks')
const teams = require('./routes/teams')
const cors = require('cors')

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://maximalley.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://api.maximalley-survivor.com',
  issuer: 'https://maximalley.auth0.com/',
  algorithms: ['RS256']
})

const app = express()
app.use(cors({ credentials: true }))
app.use(jwtCheck)
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.status(200).send('MaxiMalley API Server')
})

//picks(app)
//teams(app)

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message)
  console.log('ERROR: ', err)
})

app.listen(PORT || 5000, () =>
  console.log('MaxiMalley API is up on ', PORT || 5000)
)
