module.exports = function createGetDetailMoviesService({ httpClient }){
  return function getDetailMoviesService(params){
    return httpClient.get(
      `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${params}`
    )
  }
}
