const { environment } = require("@rails/webpacker");
// 参考: https://qiita.com/jerrywdlee/items/cfd06a64edffd8703a1e
const webpack = require("webpack");

environment.config.externals = {
  jquery: "$",
};

environment.plugins.prepend(
  "Provide",
  new webpack.ProvidePlugin({
    $: "jquery",
    "window.$": "jquery",
  })
);

module.exports = environment;
