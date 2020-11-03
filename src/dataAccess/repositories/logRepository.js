module.exports = function createLogRepo({ connectDB, queryBuilder }) {
  return Object.freeze({
    insert
  })

  async function insert(data){
    const db = await connectDB()
    let query = queryBuilder.insert(data, 'logs')
    return db.execute(query, Object.values(data))
  }
}

