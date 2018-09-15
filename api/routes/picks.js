const NodeHTTPError = require('node-http-error')
const { getPick, listPicks, postPick, updatePick } = require('../dal')
const { pathOr, propOr, isEmpty, not } = require('ramda')
const checkRequiredFields = require('../lib/checkRequiredFields')
const cleanObj = require('../lib/cleanObj')
const bodyParser = require('body-parser')

const pickRoutes = app => {
  app.get('/picks', (req, res, next) => {
    listPicks()
      .then(picks => res.status(200).send(picks))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })

  app.get('/picks', bodyParser.json(), (req, res, next) => {
    const pickID = pathOr('', ['params', 'id'], req)

    getPick(pickID).then(pick => res.status(200).send(pick))
  })

  app.post('/picks', bodyParser.json(), (req, res, next) => {
    const newPick = propOr({}, 'body', req)
    const missingFields = checkRequiredFields(
      ['weekId', 'userId', 'teamId', 'pickStatus', 'locked'],
      newPick
    )
    if (not(isEmpty(missingFields))) {
      next(
        new NodeHTTPError(
          400,
          `missing the following  fields: ${missingFields}`
        )
      )
    }

    const finalObj = cleanObj(
      ['weekId', 'userId', 'teamId', 'pickStatus', 'locked'],
      newPick
    )
    postPick(finalObj)
      .then(added => {
        console.log(added)
        res.status(201).send(added)
      })
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })

  app.put('/picks', bodyParser.json(), (req, res, next) => {
    const updatedPick = propOr({}, 'body', req)

    if (isEmpty(updatedPick)) {
      res
        .status(400)
        .send('Please provide a valid JSON document in the request body.')
      return
    }
    const missingFields = checkRequiredFields(
      [
        '_id',
        '_rev',
        'type',
        'weekId',
        'userId',
        'teamId',
        'pickStatus',
        'locked'
      ],
      updatedPick
    )

    if (not(isEmpty(missingFields))) {
      res.status(400).send(missingFieldsMsg(missingFields))
      return
    }
    const finalObj = cleanObj(
      [
        '_id',
        '_rev',
        'type',
        'weekId',
        'userId',
        'teamId',
        'pickStatus',
        'locked'
      ],
      updatedPick
    )

    updatePick(finalObj)
      .then(postResponse => res.status(200).send(postResponse))
      .catch(err => next(new NodeHTTPError(err.status, err.message, err)))
  })
}

module.exports = pickRoutes

{
  /* 
  
 */
}
