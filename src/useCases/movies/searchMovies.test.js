require('dotenv').config()
const { addLog } = require('../logs')
const { searchMoviesService } = require('../../services/movies')
const createSearchMovie = require('./searchMovies')
const searchMovie = createSearchMovie({ searchMoviesService, addLog  })

describe('[UseCase Movies - Search] Test Search Movies', () => {
  test('[search movies] should return data movies and affected row mysql = 1', (done) => {
    return searchMovie({ path: '/search', params: 'dark+phoenix'})
    .then(data => {
      const responseOMDB = data[0]
      const responseExecuteMySql = data[1][0]

      // omdb
      expect(responseOMDB.status).toEqual(200)
      expect(responseOMDB.data).toHaveProperty('Response')
      expect(responseOMDB.data.Response).toEqual('True')
      expect(responseOMDB.data).toHaveProperty('Search')

      // mysql
      expect(responseExecuteMySql).toHaveProperty('affectedRows')
      expect(responseExecuteMySql.affectedRows).toEqual(1)
      done()
    })
  })
})
