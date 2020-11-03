const moviesController = require('./movies')
const notFound = require('./notFound')

module.exports = Object.freeze({
  ...moviesController,
  notFound
})
