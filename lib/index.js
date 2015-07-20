var tags = [
  require('./art'),
  require('./elective'),
  require('./english'),
  require('./history'),
  require('./languages'),
  require('./math'),
  require('./others'),
  require('./science'),
  require('./socialStudies')
]

module.exports = merge(tags)

function merge(arr) {
  var merged = []
  return merged.concat.apply(merged, arr)
}
