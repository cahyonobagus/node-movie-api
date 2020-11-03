module.exports = function createRouteCallback(controller){
  return async function routeCallback(req, res){
    await controller(req)
    .then(response => {
      if(response.headers) res.set(response.headers)
      res.type('json')
      res.status(response.statusCode).send(response.body)
    })
    .catch(error => {
      res.status(500).send({ message: 'Internal Server Error'})
    })
  }
}
