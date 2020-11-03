const { addLog } = require('../logs')
const { searchMoviesService, getDetailMoviesService } = require('../../services/movies')
const createSearchMovie = require('./searchMovies')
const createGetDetailMovie = require('./getDetailMovies')

const searchMovie = createSearchMovie({ searchMoviesService, addLog  })
const getDetailMovie = createGetDetailMovie({ getDetailMoviesService, addLog })

module.exports = {
  searchMovie,
  getDetailMovie
}
