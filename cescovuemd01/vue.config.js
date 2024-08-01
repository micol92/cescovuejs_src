const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  lintOnSave: false,
  publicPath: "./",
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "./manifest.json"),
            to: path.resolve(__dirname, "./dist/"),
            toType: "dir",
          },
          {
            from: path.resolve(__dirname, "./xs-app.json"),
            to: path.resolve(__dirname, "./dist/"),
            toType: "dir",
          },
        ],
      }),
    ],
  },
};
