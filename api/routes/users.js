const NodeHTTPError = require('node-http-error')
const bodyParser = require('body-parser')

const { listUsers, getUser, updateUser } = require('../dal')

const usersRoutes = app => {
  app.get('/', (req, res) => res.send('Welcome to the MaxiMalley API'))

  app.get('/users', (req, res, next) => {
    listUsers()
      .then(users => res.status(200).send(users))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })

  app.get('/users/:id', (req, res, next) => {
    const userID = pathOr('', ['params', 'id'], req)
    getTeam(userID)
      .then(user => res.status(200).send(user))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })
}

module.exports = usersRoutes
