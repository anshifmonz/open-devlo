const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Portfinder = require('portfinder');

module.exports = new Promise((resolve, reject) => {
  Portfinder.getPortPromise({
    port: 3000,
    stopPort: 3333
  }).then(port => {
    resolve({
      mode: 'development',
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
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
                  ['@babel/preset-react', { runtime: 'automatic' }]
                ]
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
      ],
      devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: port,
        open: true,
        hot: true,
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
    });
  }).catch(err => {
    reject(err);
  });
});
