const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "../index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,  
        loaders: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "index.html",
      filename: "index.html"
    })
  ]
};