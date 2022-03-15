const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
  ruleForJavaScript,
  rulesForHtml,
  rulesForCss,
} = require("./webpack_rules/rules.js");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  mode: "development",
  module: {
    rules: [
      ruleForJavaScript,
      rulesForHtml,
      rulesForCss,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    open: true,
    port: 3009,
    compress: true,
    historyApiFallback: true,
  },
};
