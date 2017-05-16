const webpack = require('webpack')

module.exports = {
  entry: './src/index.jsx',

  output: {
    path: __dirname+'/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets:['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders:[
          'style-loader',
          'css-loader?modules&importLoaders=1'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  resolve:{
    extensions: ['', '.js', '.jsx']
  },

  devServer:{
    contentBase: './dist',
    inline: true,
    historyApiFallback:true
  },

  plugins: process.env.NODE_ENV === 'production' ?[
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],

}
