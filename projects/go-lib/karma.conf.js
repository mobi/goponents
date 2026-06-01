// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      
      require('karma-spec-reporter')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "../coverage"),
      subdir: '.',
      reporters: [
        { type: "html" },
        { type: "lcovonly" },
        { type: "text-summary" }
      ],
      check: {
        global: {
          statements: 90,
          lines: 90,
          branches: 75,
          functions: 86,
        },
      },
    },
    reporters: ['progress'],
    specReporter: {
      suppressSkipped: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false
  });
};
