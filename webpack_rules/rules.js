const ruleForJavaScript = {
  test: /\.(js$|jsx)/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  },
}; 
const rulesForHtml = {
  test: /\.html$/,
  exclude: /templates/,
  use: {
    loader: "html-loader",
  },
};
const rulesForCss = {
  test: /\.(scss|css)$/,
  use: [
    "style-loader",
    "css-loader",
    "sass-loader"
  ]
};

const rulesForImages = {
  test: /\.(png|jpg|svg)$/,
  type: "asset/resource",
};

module.exports =  {
  ruleForJavaScript,
  rulesForHtml,
  rulesForCss,
  rulesForImages,
};