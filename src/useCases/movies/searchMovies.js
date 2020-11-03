module.exports = function createSearchMovie({ searchMoviesService, addLog  }){
  return async function searchMovie({path, params}){
    return Promise.all(
      [
        searchMoviesService(params), 
        addLog({ endpoint: path, parameter: params })
      ])
  }
}
