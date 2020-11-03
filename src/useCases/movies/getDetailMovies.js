module.exports = function createGetDetailMovie({ getDetailMoviesService, addLog  }){
  return async function getDetailMovie({path, params}){
    return Promise.all(
      [
        getDetailMoviesService(params), 
        addLog({ endpoint: path, parameter: params })
      ])
  }
}
