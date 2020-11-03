const createAddLog = require('./addLogs')
const { logRepo } = require('../../dataAccess/repositories')

const addLog = createAddLog({ logRepo })

module.exports = {
  addLog
}
