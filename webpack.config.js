const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  mode: 'development',
  entry: {
    index: './main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js'
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },

  devtool: NODE_ENV == 'development' ? "source-map" : null,

  watch: NODE_ENV == 'development',

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentedSyntax: true
              },
              prependData: `@import "variables.sass"`
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ]
}