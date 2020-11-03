const axios = require('axios')
const createSearchMoviesService = require('./searchMovies')
const createGetDetailMoviesService = require('./getDetailMovies')

const searchMoviesService = createSearchMoviesService({ httpClient: axios })
const getDetailMoviesService = createGetDetailMoviesService({ httpClient: axios })

const movieService = {
  searchMoviesService,
  getDetailMoviesService
}

module.exports = movieService
