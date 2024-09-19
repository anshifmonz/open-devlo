const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Portfinder = require('portfinder');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (_, argv) => {
  const isProduction = argv.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? 'bundle.[contenthash].js' : 'bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ['@babel/preset-react', { runtime: 'automatic' }],
              ],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        } : false,
      }),
      isProduction && new CleanWebpackPlugin(),
    ].filter(Boolean),
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    stats: 'none',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
  };

  if (!isProduction) {
    return Portfinder.getPortPromise({
      port: 3000,
      stopPort: 3333,
    }).then(port => {
      config.devServer.port = port;
      return config;
    }).catch(err => {
      throw new Error(`Could not find an available port: ${err}`);
    });
  }

  return config;
};
