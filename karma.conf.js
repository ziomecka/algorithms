const webpack = require('./webpack.conf');

module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: [
        'node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
      { pattern: 'tests/**/*spec.js', included: true },
      { pattern: 'src/**/*.js', included: false }
    ],
    exclude: [
    ],
    preprocessors: {
        'tests/**/*.js': ['webpack']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    hooks: [
        'karma-chrome-launcher',
        'karma-jasmine',
        'karma-webpack',
    ],
    webpack
  })
}
