const NodeHTTPError = require('node-http-error')
const { listWeeks, getWeek } = require('../dal')
const { pathOr } = require('ramda')

const weeksRoutes = app => {
  app.get('/', (req, res) => res.send('Welcome to the MaxiMalley API'))

  app.get('/weeks', (req, res, next) => {
    listWeeks()
      .then(weeks => res.status(200).send(weeks))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })

  app.get('/weeks/:id', (req, res, next) => {
    const weekID = pathOr('', ['params', 'id'], req)
    getWeek(weekID)
      .then(week => res.status(200).send(week))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })
}

module.exports = weeksRoutes
