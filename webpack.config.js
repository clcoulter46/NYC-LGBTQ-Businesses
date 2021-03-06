'use strict'

const { resolve } = require('path')

// module.exports = {
//   entry: ['babel-polyfill', './client/index.js'],
//   output: {
//     path: __dirname,
//     filename: './public/bundle.js'
//   },
//   mode: 'development',
//   context: __dirname,
//   devtool: 'source-map',
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },
//   module: {
//     rules: [
//       {
//         test: /jsx?$/,
//         include: resolve(__dirname, './app'),
//         loader: 'babel-loader'
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader'
//         ]
//       }
//     ]
//   }
// }

module.exports = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react'
          ]
        }
      }
    ]
  }
}
