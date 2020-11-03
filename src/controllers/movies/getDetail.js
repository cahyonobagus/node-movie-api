module.exports = function createGetDetail({ getDetailMovie }){
  return async function getDetail(httpReq) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const responsePromise = await getDetailMovie({ path: httpReq.path, params: httpReq.query.id})
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
