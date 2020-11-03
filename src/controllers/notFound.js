module.exports = async function () {
  return {
    headers: {
      'Content-Type': 'application/json'
    },
    statusCode: 404,
    body: { message: 'Not found' }
  }
}
