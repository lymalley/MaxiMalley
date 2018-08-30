require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))

const COUCHDB_SERVER = process.env.COUCHDB_SERVER
const COUCHDB_DBNAME = process.env.COUCHDB_DBNAME
const DB_URL = `${COUCHDB_SERVER}${COUCHDB_DBNAME}`

const db = new PouchDB(DB_URL)

db.bulkDocs([
  {
    _id: 'team_cardinals',
    type: 'team',
    name: 'Cardinals'
  },
  {
    _id: 'team_falcons',
    type: 'team',
    name: 'Falcons'
  },
  {
    _id: 'team_ravens',
    type: 'team',
    name: 'Ravens'
  },
  {
    _id: 'team_bills',
    type: 'team',
    name: 'Bills'
  },
  {
    _id: 'team_panthers',
    type: 'team',
    name: 'Panthers'
  },
  {
    _id: 'team_bears',
    type: 'team',
    name: 'Bears'
  },
  {
    _id: 'team_bengals',
    type: 'team',
    name: 'Bengals'
  },
  {
    _id: 'team_browns',
    type: 'team',
    name: 'Browns'
  },
  {
    _id: 'team_cowboys',
    type: 'team',
    name: 'Cowboys'
  },
  {
    _id: 'team_broncos',
    type: 'team',
    name: 'Broncos'
  },
  {
    _id: 'team_lions',
    type: 'team',
    name: 'Lions'
  },
  {
    _id: 'team_packers',
    type: 'team',
    name: 'Packers'
  },
  {
    _id: 'team_texans',
    type: 'team',
    name: 'Texans'
  },
  {
    _id: 'team_colts',
    type: 'team',
    name: 'Colts'
  },
  {
    _id: 'team_jaguars',
    type: 'team',
    name: 'Jaguars'
  },
  {
    _id: 'team_chiefs',
    type: 'team',
    name: 'Chiefs'
  },
  {
    _id: 'team_chargers',
    type: 'team',
    name: 'Chargers'
  },
  {
    _id: 'team_rams',
    type: 'team',
    name: 'Rams'
  },
  {
    _id: 'team_dolphins',
    type: 'team',
    name: 'Dolphins'
  },
  {
    _id: 'team_vikings',
    type: 'team',
    name: 'Vikings'
  },
  {
    _id: 'team_patriots',
    type: 'team',
    name: 'Patriots'
  },
  {
    _id: 'team_saints',
    type: 'team',
    name: 'Saints'
  },
  {
    _id: 'team_giants',
    type: 'team',
    name: 'Giants'
  },
  {
    _id: 'team_jets',
    type: 'team',
    name: 'Jets'
  },
  {
    _id: 'team_raiders',
    type: 'team',
    name: 'Raiders'
  },
  {
    _id: 'team_eagles',
    type: 'team',
    name: 'Eagles'
  },
  {
    _id: 'team_steelers',
    type: 'team',
    name: 'Steelers'
  },
  {
    _id: 'team_49ers',
    type: 'team',
    name: '49ers'
  },
  {
    _id: 'team_seahawks',
    type: 'team',
    name: 'Seahawks'
  },
  {
    _id: 'team_buccaneers',
    type: 'team',
    name: 'Buccaneers'
  },
  {
    _id: 'team_titans',
    type: 'team',
    name: 'Titans'
  },
  {
    _id: 'team_redskins',
    type: 'team',
    name: 'Redskins'
  }
])
  .then(result => console.log('success', JSON.stringify(result, null, 2)))
  .catch(err => console.log('err', err))
