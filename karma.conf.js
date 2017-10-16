var path = require('path')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai', 'phantomjs-shim'],
    browsers: ['PhantomJS'],
    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom) 
      exitOnResourceError: true
    },
    files: [
      './src/*.js',
      './test/*.js'
    ],
    reporters: ['spec'],  
    // junitReporter: {
    //   outputDir: 'test_result', // results will be saved as $outputDir/$browserName.xml 
    //   outputFile: 'test_karma_js.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile 
    //   suite: '', // suite will become the package name attribute in xml testsuite element 
    //   useBrowserName: true, // add browser name to report and classes names 
    //   nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element 
    //   classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element 
    //   properties: {} // key value pair of properties to add to the <properties> section of the report 
    // },
    customContextFile:path.resolve('./test/fixture.html'),   
    client: {
      captureConsole: true
    }
  });
};