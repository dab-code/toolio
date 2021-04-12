const ClosurePlugin = require('closure-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.ts',  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: '@dab-code/toolio'
  }
};