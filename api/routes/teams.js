const NodeHTTPError = require('node-http-error')
const { listTeams, getTeam } = require('../dal')
const { pathOr } = require('ramda')

const teamsRoutes = app => {
  app.get('/', (req, res) => res.send('Welcome to the MaxiMalley API'))

  app.get('/teams', (req, res, next) => {
    listTeams()
      .then(teams => res.status(200).send(teams))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })

  app.get('/teams/:id', (req, res, next) => {
    const teamsID = pathOr('', ['params', 'id'], req)
    getTeam(teamID)
      .then(team => res.status(200).send(team))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })
}

module.exports = teamsRoutes
