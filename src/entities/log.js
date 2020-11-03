module.exports = function createLog ({ 
  endpoint, parameter, created_at = new Date()
} = {}){

  if(!endpoint) throw new Error('Log must have an endpoint')
  if(!parameter) throw new Error('Log must have parameter')

  return Object.freeze({
    getEndpoint: () => endpoint,
    getParameter: () => parameter,
    getCreatedAt: () => created_at
  })
}

