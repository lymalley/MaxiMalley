require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))

const COUCHDB_SERVER = process.env.COUCHDB_SERVER
const COUCHDB_DBNAME = process.env.COUCHDB_DBNAME
const DB_URL = `${COUCHDB_SERVER}${COUCHDB_DBNAME}`

const db = new PouchDB(DB_URL)

db.bulkDocs([])
  .then(result => console.log('success', JSON.stringify(result, null, 2)))
  .catch(err => console.log('err', err))
