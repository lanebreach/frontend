const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PORTS = { SERVER: 4999, APP: 5000 };

module.exports = {
  name: "client",
  target: "web",
  mode: "development",
  node: { fs: "empty" },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
        //  [
          // {
            // loader: "babel-loader",
            // options: {
            //   presets: ["es2017", "react"],
            // },
          // },
        // ],
      },
      { use: ["style-loader", "css-loader"], test: /\.(css|scss)$/ },
    ],
  },
  devtool: "source-map",
  entry: ["babel-polyfill", path.resolve(__dirname, "../src/index.js")],
  output: {
    filename: "bundle-frontend.js",
    path: path.resolve(__dirname, "../public/dist"),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, "../public/favicon.png"),
      template: "src/index.html",
      inject: "body",
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    host: "0.0.0.0",
    historyApiFallback: true,
    hot: true,
    port: PORTS.APP,
    proxy: [
      {
        context: ["/favicon.png"],
        target: `http://localhost:${PORTS.SERVER}`,
      },
    ],
  },
};
