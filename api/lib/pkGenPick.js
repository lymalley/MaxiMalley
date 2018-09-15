const slugify = require('slugify')
const { compose, concat, toLower } = require('ramda')
module.exports = (prefix, obj) => {
  const user = ('_', obj.user.name)
  const week = concat('_week', obj.week)
  return compose(
    concat(prefix),
    concat(user),
    slugify,
    toLower
  )(week)
}
