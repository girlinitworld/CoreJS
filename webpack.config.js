const path = require("path");

module.exports = {
  entry: {
    main: "./part9/script.js",
    another: "./CoreJs-part1.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./part9/bundle/"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,

        // use: {
        //   loader: "babel-loader",
        //   options: {
        //     presets: ["@babel/preset-env"],
        //   },
        // },
      },
    ],
  },
};
