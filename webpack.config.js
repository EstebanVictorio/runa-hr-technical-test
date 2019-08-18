const path = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");
const HWP = require("html-webpack-plugin");

const root = path.resolve(__dirname, "src");
const plugins = [
  new HWP({
    inject: "body",
    filename: "index.html",
    template: "./index.ejs",
    title: "Shopping Cart"
  }),
  new webpack.ProvidePlugin({
    React: "react",
    ReactDOM: "react-dom"
  })
];

const resolve = {
  extensions: [".js", ".svg"],
  alias: {
    utils: `${root}/utils`,
    ducks: `${root}/ducks`,
    epics: `${root}/epics`,
    pages: `${root}/pages`,
    store: `${root}/store`,
    routes: `${root}/routes`,
    components: `${root}/components`
  }
};

const devServer = {
  contentBase: path.resolve(__dirname, "public"),
  port: process.env.PORT || 3000,
  historyApiFallback: true
};

const alias = {};

const moduleConf = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-transform-runtime"]
        }
      }
    }
  ]
};

dotenv.config();

const config = {
  resolve,
  plugins,
  devServer,
  module: moduleConf,
  mode: process.env.NODE_ENV || "production",
  output: {
    path: path.resolve(__dirname, "public")
  },
  entry: {
    main: path.resolve(__dirname, "src/index.js")
  }
};

module.exports = config;
