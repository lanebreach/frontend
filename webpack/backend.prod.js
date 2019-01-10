const webpack = require("webpack");
const dotenv = require("dotenv");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

dotenv.config();

module.exports = {
  name: "server",
  mode: "production",
  node: { fs: "empty" },
  target: "node",
  entry: path.resolve(__dirname, "../server/index.js"),
  output: {
    path: path.resolve(__dirname, "../public/dist"),
    filename: "bundle-backend.js",
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  externals: [
    nodeExternals({
      modulesDir: path.resolve(__dirname, "../node_modules"),
    }),
  ],
};
