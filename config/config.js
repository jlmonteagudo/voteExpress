
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  

module.exports = {
  development: {
    db: 'mongodb://test:test@widmore.mongohq.com:10000/vote-express',
    root: rootPath,
    app: {
      name: 'Vote DEV'
    }
  },
  test: {
    db: 'mongodb://localhost/noobjs_test',
    root: rootPath,
    app: {
      name: 'Vote TEST'
    }
  },  
  production: {
    db: 'mongodb://test:test@widmore.mongohq.com:10000/vote-express',
    root: rootPath,
    app: {
      name: 'Vote PROD'
    }    
  }
}
