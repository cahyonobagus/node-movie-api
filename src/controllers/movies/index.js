const { searchMovie, getDetailMovie } = require('../../useCases/movies')
const createSearch = require('./search')
const createGetDetail = require('./getDetail')

const moviesSearch = createSearch({ searchMovie })
const moviesGetDetail = createGetDetail({ getDetailMovie })

module.exports = Object.freeze({
  moviesSearch,
  moviesGetDetail
})
