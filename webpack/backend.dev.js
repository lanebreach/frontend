const webpack = require("webpack");
const dotenv = require("dotenv");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const HappyPack = require("happypack");

dotenv.config();

const compiler = webpack({
  name: "server",
  mode: "development",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "happypack/loader" },
    ],
  },
  devtool: "source-map",
  entry: ["babel-polyfill", path.resolve(__dirname, "../server/index.js")],
  output: {
    path: path.resolve(__dirname, "../public/dist"),
    filename: "bundle-backend.js",
  },
  plugins: [
    new HappyPack({ loaders: ["babel-loader"] }),
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
});

module.exports = compiler;
