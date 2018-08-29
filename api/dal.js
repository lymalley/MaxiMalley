const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const {
  map,
  prop,
  merge,
  split,
  not,
  isEmpty,
  filter,
  propEq,
  propOr,
  contains
} = require('ramda')
const COUCHDB_SERVER = process.env.COUCHDB_SERVER
const COUCHDB_DBNAME = process.env.COUCHDB_DBNAME
const DB_URL = `${COUCHDB_SERVER}${COUCHDB_DBNAME}`

const db = new PouchDB(DB_URL)
const { getAllDocs } = require('./dal-helper')
const pkGen = require('./lib/pkGen')

const getTeams = query => {
  const [key, value] = not(isEmpty(query)) ? split(':', query) : ['', '']

  return getAllDocs(db, {
    include_docs: true,
    startkey: 'team_',
    endkey: 'team_\ufff0'
  }).then(
    teams =>
      isEmpty(query)
        ? teams
        : filter(team => contains(value, propOr('', key, team)), teams)
  )
}

const getTeam = id => db.get(id)

const updateTeam = id => {
  return db.put(id)
}

module.exports = {
  getTeams,
  getTeam,
  updateTeam
}
