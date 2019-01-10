const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// Plugins below analyze webpack with script "yarn analyze-webpack"

module.exports = {
  name: "client",
  mode: "production",
  node: { fs: "empty" },
  target: "web",
  devtool: "source-map",
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "../public/dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      { use: ["style-loader", "css-loader"], test: /\.(css|scss)$/ },
    ],
  },
  resolve: { extensions: [".js"] },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: path.resolve(__dirname, "../public/favicon.png"),
      inject: "body",
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
