const NodeHTTPError = require('node-http-error')
const bodyParser = require('body-parser')
const { not } = require('ramda')
const checkRequireFields = require('../lib/checkRequiredFields')
const cleanObj = require('../lib/cleanObj')

const { listUsers, getUser, updateUser } = require('../dal')

const usersRoutes = app => {
  app.get('/', (req, res) => res.send('Welcome to the MaxiMalley API'))

  app.get('/users', (req, res, next) => {
    listUsers()
      .then(users => res.status(200).send(users))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })

  app.get('/users/:id', (req, res, next) => {
    const userId = pathOr('', ['params', 'id'], req)
    getUser(userID)
      .then(user => res.status(200).send(user))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  app.put('/users', bodyParser.json(), (req, res, next) => {
    const updatedUser = propOr({}, 'body', req)
    if (isEmpty(updatedUser)) {
      res.status(400).send('Please provide a valid JSON request')
      return
    }
    const missingFields = checkRequireFields(
      ['_id', '_rev', 'type', 'name'],
      updatedUser
    )
    if (not(isEmpty(missingFields))) {
      res.status(400).send(`missing the following  fields: ${missingFields}`)
      return
    }
    const finalObj = cleanObj(['_id', '_rev', 'type', 'name'], updatedUser)
    updateUser(finalObj)
      .then(result => res.status(200).send(result))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })
}

module.exports = usersRoutes
