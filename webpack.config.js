const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = (env, options) => ({
  entry: ["./src/js/index.js"],
  devServer: {
    contentBase: "./dist"
  },
  
  node: {
    fs: 'empty'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          options.mode !== "production"
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
              },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(svg|jpg|gif|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images",
              publicPath: "/images/"
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
    new HtmlWebpackPlugin({
        template: "src/index.html"
    }),
    new CleanWebpackPlugin(["/"]),
  ],

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    //path.resolve(__dirname, "dist")
    //[name].[contenthash].js
  }
});