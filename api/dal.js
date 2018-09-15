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
const { getAllDocs } = require('./lib/dal-helper')
const pkGen = require('./lib/pkGen')

////////////////
////TEAMS///////
///////////////

const listTeams = () =>
  db
    .allDocs({
      include_docs: true,
      startkey: 'team_',
      endkey: 'team_\ufff0'
    })
    .then(doc => map(row => propOr({}, 'doc', row), propOr([], 'rows', doc)))

const getTeam = id => db.get(id)

////////////////
////WEEKS///////
///////////////

const listWeeks = () =>
  db
    .allDocs({
      include_docs: true,
      startkey: 'week_',
      endkey: 'week_\ufff0'
    })
    .then(doc => map(row => propOr({}, 'doc', row), propOr([], 'rows', doc)))

const getWeek = id => db.get(id)

//////////////////////
///////PICKS/////////
////////////////////

const listPicks = query =>
  // const [key, value] = not(isEmpty(query)) ? split(':', query) : ['', '']

  db
    .allDocs({
      include_docs: true,
      startkey: 'pick_',
      endkey: 'pick_\ufff0'
    })
    .then(doc => map(row => propOr({}, 'doc', row), propOr([], 'rows', doc)))

const getPick = id => db.get(id)

const updatePick = id => {
  return db.put(id)
}

const postPick = pick => {
  const newPick = merge(pick, {
    _id: pkGen('pick_', `${pick.userId}-${pick.weekId}`),
    type: 'pick'
  })
  return db.put(newPick)
}

/////////////////////
//////USERS/////////
//////////////////

const listUsers = () =>
  db
    .allDocs({
      include_docs: true,
      startkey: 'user_',
      endkey: 'user_\ufff0'
    })
    .then(doc => map(row => propOr({}, 'doc', row), propOr([], 'rows', doc)))

const getUser = id => db.get(id)

const updateUser = id => {
  return db.put(id)
}

module.exports = {
  listTeams,
  getTeam,
  updatePick,
  listPicks,
  getPick,
  postPick,
  listUsers,
  getUser,
  updateUser,
  listWeeks,
  getWeek
}
