module.exports = {
    mongodbMemoryServerOptions: {
      binary: {
        version: '4.0.3',         // Version of MongoDB Test Server
        skipMD5: true,              
      },
      instance: {
        dbName: 'mypharmatest',   // database test name
      },
      autoStart: false,          // auto start is used to prevent the server from starting before the tests are run
    },
    
  };