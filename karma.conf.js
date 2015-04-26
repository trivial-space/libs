// Karma configuration
// Generated on Mon Dec 08 2014 23:10:34 GMT+0100 (CET)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai-sinon'],


        // list of files / patterns to load in the browser
        files: [
            'spec/**/*-test.js',
            'spec/**/*-test.coffee'
        ],


        preprocessors: {
            // add webpack as preprocessor
            'spec/**/*': ['webpack']
        },


        webpack: {

            cache: true,
            debug: true,

            module: {
                loaders: [
                    {
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        test: /\.js$/
                    }, {
                        loader: 'coffee-loader',
                        test: /\.coffee$/
                    }
                ]
            },

            resolve: {
                extensions: ['', '.js', '.json', '.coffee']
            }
        },


        // list of files to exclude
        exclude: [],


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],


        plugins: [
            require('karma-webpack'),
            require('karma-mocha'),
            require('karma-chai-sinon'),
            require('karma-chrome-launcher'),
            require('karma-mocha-reporter')
        ],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
