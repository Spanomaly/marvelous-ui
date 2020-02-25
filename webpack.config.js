const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        options: {
          esModule: false,
        },
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  externals: {
    'Config': JSON.stringify(process.env.NODE_ENV === 'production' ? {
      //Prod
      serverURL: "http://localhost:4000",
    } : {
      //Dev
      serverURL: "http://localhost:4000",
    })
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};
