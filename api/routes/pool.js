const NodeHTTPError = require('node-http-error')
const {
 listGames,
 getGame,
 
} = require('../dal')
const { pathOr, propOr, isEmpty, not } = require('ramda')
const checkRequiredFields = require('../lib/checkRequiredFieds')
const cleanObj = require('../lib/cleanObj')
const bodyParser = require('body-parser')

const activitiesRoutes = app => {
  app.get('/', (req, res) => res.send('Welcome to Tidey API'))

  app.get('/games', (req, res, next) => {
    const query = pathOr('', ['query', 'filter'], req)

    getTeams(query)
      .then(games => res.send(games))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  app.get('/teams/:id', (req, res, next) => {
    const teamsID = pathOr('', ['params', 'id'], req)
    getTeam(teamID)
      .then(team => res.status(200).send(team))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  