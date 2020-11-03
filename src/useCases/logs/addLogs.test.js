require('dotenv').config()
const createAddLog = require('./addLogs')
const { logRepo } = require('../../dataAccess/repositories')
const logData = {
  endpoint: '/search',
  parameter: 'dark phoenix',
  created_at: new Date()
}

const addLog = createAddLog({ logRepo })

describe('[UseCase Logs - Add ] Test use case add log', () => {
  test('[add log] should return affected rows equal to 1', (done) => {
    return addLog(logData).then(data => {
      expect(data[0]).toHaveProperty('affectedRows')
      expect(data[0].affectedRows).toEqual(1)
      done()
    })
  })
})
