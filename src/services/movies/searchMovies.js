module.exports = function createSearchMoviesService({ httpClient }){
  return function searchMoviesService(params){
    return httpClient.get(
      `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${params}`
    )
  }
}
