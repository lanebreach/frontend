const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

if (!process.env.PORT) {
  const errMsg = "PORT environment variable is not defined";
  console.error(errMsg);
  throw new Error(errMsg);
}

module.exports = {
  entry: path.resolve(__dirname, "../index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dev"),
    publicPath: "/"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader/webpack", "babel-loader"]
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
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true // webpack@2.x and newer
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "index.html",
      filename: "index.html"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dev"),
    compress: true,
    port: parseInt(process.env.PORT) + 1,
    historyApiFallback: true,
    proxy: {
      "/api": `http://localhost:${process.env.PORT}`
    }
  }
};
