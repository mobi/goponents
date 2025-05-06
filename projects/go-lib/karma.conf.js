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
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-spec-reporter')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "../coverage"),
      reports: ["html", "lcovonly", "text-summary"],
      thresholds: {
        statements: 93,
        lines: 92,
        branches: 75,
        functions: 88,
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
