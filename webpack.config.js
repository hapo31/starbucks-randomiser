const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

const isDev = process.env.NODE_ENV !== "production";

const outputPath = isDev
  ? path.join(__dirname, "debug")
  : path.join(__dirname, "extension");

const plugins = [
  new CopyWebpackPlugin([
    {
      from: path.join(__dirname, "assets/manifest.json")
    }
  ])
];

module.exports = {
  entry: {
    script: path.join(__dirname, "./src/index.tsx")
  },
  devtool: isDev ? "source-map" : false,
  watch: isDev,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".svg"]
  },
  output: {
    filename: "[name].js",
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: !isDev
          }
        }
      }
    ]
  },
  plugins
};
