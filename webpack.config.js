var path = require('path'),
    webpack = require('webpack')


module.exports = {

  entry: path.resolve(__dirname, "./lib/index.ts"),

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "tvs-libs.js",
    library: 'tvsLibs',
    libraryTarget: "umd"
  },

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { loader: 'coffee-loader', test: /\.coffee$/ }
    ]
  },

  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.json', '.ts', '.tsx', '.js', '.coffee'],
    root: [
      path.resolve(__dirname, "./lib")
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: true
    })
  ]
}
