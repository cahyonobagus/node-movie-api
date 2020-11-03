const axios = require('axios')
const createGetDetailMoviesService = require('./getDetailMovies')
const getDetailMoviesService = createGetDetailMoviesService({ httpClient: axios })
require('dotenv').config()
const imdbId = 'tt6565702'
describe('[Services Movies] Get Detail Movies',() => {
  test('get movies with id should return response 200 and containing data with correct id',() => {
    return getDetailMoviesService(imdbId).then(response => {
      expect(response.status).toEqual(200)
      expect(response.data).toHaveProperty('imdbID')
      expect(response.data.imdbID).toEqual(imdbId)
    })
  })
})
