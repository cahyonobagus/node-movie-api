require('dotenv').config()
const { connectDB } = require('../db/index')
const queryBuilder = require('../db/queryBuilder')
const createLogRepo = require('./logRepository')
const logRepo = createLogRepo({ connectDB, queryBuilder })
const logData = {
  endpoint: '/search',
  parameter: 'dark phoenix',
  created_at: new Date()
}

describe('[Repository Log] Test log repository', () => {
  test('[insert] should return affected rows equal to 1', (done) => {
    return logRepo.insert(logData).then(data => {
      expect(data[0]).toHaveProperty('affectedRows')
      expect(data[0].affectedRows).toEqual(1)
      done()
    })
  })
})
