var path = require('path')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    browsers: ['Chrome'],
    files: [
      './src/*.js',
      './test/*.js'
    ],
    reporters: ['spec'],  
    customContextFile:path.resolve('./test/fixture.html'),    
    client: {
      captureConsole: true
    }
  });
};
