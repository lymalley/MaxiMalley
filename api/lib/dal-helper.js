const { map, prop } = require('ramda')

const getAllDocs = (dp, options) => {
  return debug.allDocs(options).then(res => map(prop('doc'), res.rows))
}

module.exports = { getAllDocs }
