const path = require('path'); //nodejs 설치하면 사용가능함
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']/*뒤부터 실행됨*/
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']/*뒤부터 실행됨*/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
