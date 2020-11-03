const axios = require('axios')
const createSearchMoviesService = require('./searchMovies')
const searchMoviesService = createSearchMoviesService({ httpClient: axios })
require('dotenv').config()
const keyword = 'dark+phoenix'
describe('[Services Movies] Search Movies',() => {
  test('search movies should return response 200 and containing data with no error',() => {
    return searchMoviesService(keyword).then(response => {
      expect(response.status).toEqual(200)
      expect(response.data).toHaveProperty('Response')
      expect(response.data.Response).toEqual('True')
      expect(response.data).toHaveProperty('Search')
    })
  })
})
