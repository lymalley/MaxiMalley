require('dotenv').config()
const PORT = process.env.PORT
const app = require('express')()
const bodyParser = require('body-parser')
const picks = require('./routes/picks')
const teams = require('./routes/teams')
const cors = require('cors')

app.use(cors({ credentials: true }))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.status(200).send('MaxiMalley API Server')
})

picks(app)
teams(app)

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message)
  console.log('ERROR: ', err)
})

app.listen(PORT || 5000, () =>
  console.log('MaxiMalley API is up on ', PORT || 5000)
)
