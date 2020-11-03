const createLog = require('../../entities/log')

module.exports = function createAddLog({ logRepo }) {
  return async function addLog(logData){
    const log = createLog(logData)
    return logRepo.insert({
      endpoint: log.getEndpoint(),
      parameter: log.getParameter(),
      created_at: log.getCreatedAt()
    })
  }
}
