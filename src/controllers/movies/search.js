module.exports = function createSearch({ searchMovie }){
  return async function search(httpReq) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const responsePromise = await searchMovie({ path: httpReq.path ,params: httpReq.query.keyword})
      return {
        headers,
        statusCode: 200,
        body: {
          data: responsePromise[0].data
        }
      }
    } catch (e) {
      return {
        headers,
        statusCode: 500,
        body: {
          message: 'Internal Server Error'
        }
      }
    }
  }
}
