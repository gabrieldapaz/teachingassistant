// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

<<<<<<< HEAD
const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');
=======
const { SpecReporter } = require('jasmine-spec-reporter');
>>>>>>> cbde7ff2dabb465b4da631941f1b700fc546608c

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
<<<<<<< HEAD
    browserName: 'chrome'
=======
    'browserName': 'chrome'
>>>>>>> cbde7ff2dabb465b4da631941f1b700fc546608c
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
<<<<<<< HEAD
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY
      }
    }));
=======
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
>>>>>>> cbde7ff2dabb465b4da631941f1b700fc546608c
  }
};