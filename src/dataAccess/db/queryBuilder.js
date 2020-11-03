module.exports = {
  insert: function (data, tableName){
    let binding = []
    let fields = Object.keys(data).join(',')
    for(let _ in data) {
      binding.push('?')
    }
    return `INSERT INTO ${tableName} (${fields}) VALUES (${binding.join(',')})`
  }
}
