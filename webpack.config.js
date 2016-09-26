var path = require('path'),
    webpack = require('webpack')


module.exports = {

  entry: path.resolve(__dirname, "./lib/index.js"),

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "tvs-libs.js",
    library: 'tvsLibs',
    libraryTarget: "umd"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },

  devtool: "source-map",
  debug: true,

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: true
    })
  ]
}
