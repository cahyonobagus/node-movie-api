const { connectDB } = require('../db/index')
const queryBuilder = require('../db/queryBuilder')
const createLogRepo = require('./logRepository')

const logRepo = createLogRepo({ connectDB, queryBuilder })
module.exports = {
  logRepo
}
