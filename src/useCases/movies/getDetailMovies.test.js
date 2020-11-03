require('dotenv').config()
const { addLog } = require('../logs')
const { getDetailMoviesService } = require('../../services/movies')
const createGetDetailMovie = require('./getDetailMovies')
const getDetailMovie = createGetDetailMovie({ getDetailMoviesService, addLog })

describe('[UseCase Movies - Get Detail] Test Get Detail Movies', () => {
  test('[get detail movies] should return data movies and affected row mysql = 1', (done) => {
    return getDetailMovie({ path: '/detail', params: 'tt6565702'})
    .then(data => {
      const responseOMDB = data[0]
      const responseExecuteMySql = data[1][0]

      // omdb
      expect(responseOMDB.status).toEqual(200)
      expect(responseOMDB.data).toHaveProperty('imdbID')
      expect(responseOMDB.data.imdbID).toEqual('tt6565702')
      // mysql
      expect(responseExecuteMySql).toHaveProperty('affectedRows')
      expect(responseExecuteMySql.affectedRows).toEqual(1)
      done()
    })
  })
})

