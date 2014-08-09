module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'requirejs'],
        files: [
          'test-main.js',
          {pattern: 'js/modules/*.js', included: false},
          {pattern: 'tests/spec/*.js', included: false}
        ],
        preprocessors: {
            'js/modules/*.js': 'coverage'
        },
        reporters: ['progress', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        captureTimeout: 60000,
        singleRun: false
    });
};
