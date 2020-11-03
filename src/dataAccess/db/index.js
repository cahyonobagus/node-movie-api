const mysql = require('mysql2');

const dbconfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME
}

var pool;
function getPool () {
  if(pool) return pool
  pool = mysql.createPool(dbconfig)
  return pool
}

module.exports = Object.freeze({
  getPool,
  connectDB: function(){
    return getPool().promise()
  }
})
