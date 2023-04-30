const path = require("path");
const webpack = require("webpack");

module.exports = {
  resolve: {
    alias: {
      config: path.resolve(path.join(__dirname, "./cypress/config/")),
      "page-objects": path.resolve(
        path.join(__dirname, "./cypress/page-objects/"),
      ),
      "section-objects": path.resolve(
        path.join(__dirname, "./cypress/section-objects/"),
      ),
    },
    extensions: [".ts", ".js"],
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },
  module: {
    rules: [
      {
        // Match js, jsx, ts & tsx files
        test: /\.[jt]sx?$/,
        loader: "esbuild-loader",
        options: {
          // JavaScript version to compile to
          target: "es2015",
        },
      },
      {
        test: /\.feature$/,
        use: [
          {
            loader: "cypress-cucumber-preprocessor/loader",
          },
        ],
      },
      {
        test: /\.features$/,
        use: [
          {
            loader: "cypress-cucumber-preprocessor/lib/featuresLoader",
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
