const createLog = require('./log') 
var log
const logData = {
  endpoint: '/search',
  parameter: 'dark phoenix',
  created_at: new Date()
}
describe('[Entities Log] Test create log with appropriate parameters', () => { 
  beforeAll(() => {
    log = createLog(logData)
    return log
  })
  test('It should return an object', () => {
    expect(typeof log).toEqual('object')
  })
  test('the object returned should have property getEndpoint', () => {
    expect(log).toHaveProperty('getEndpoint')
  })
  test('the object returned should have property getParameter', () => {
    expect(log).toHaveProperty('getParameter')
  })
  test('the object returned should have property getCreatedAt', () => {
    expect(log).toHaveProperty('getCreatedAt')
  })
  test('the object returned should contains the correct value as input', () => {
    expect(log.getEndpoint()).toEqual(logData.endpoint)
    expect(log.getParameter()).toEqual(logData.parameter)
    expect(log.getCreatedAt()).toEqual(logData.created_at)
  })
})

describe('[Entities Log] Test create log with invalid parameters', () => {
  test('Should throw error when input endpoint is not provided',() => {
    expect(() => { 
      createLog({ 
        parameter: logData.parameter, created_at: logData.created_at
      }) 
    }).toThrow('Log must have an endpoint')
  })
  test('Should throw error when input parameter is not provided',() => {
    expect(() => { 
      createLog({ 
        endpoint: logData.parameter, created_at: logData.created_at
      }) 
    }).toThrow('Log must have parameter')
  })
})
