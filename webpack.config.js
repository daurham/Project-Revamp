const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  devServer: {
    static: {
      directory: DIST_DIR,
    },
    port: 3000,
    open: true,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', 'babel-preset-airbnb'],
          plugins: [
            ['@babel/plugin-transform-runtime', {
              regenerator: true,
            }],
          ],
        },
      },
    ],
  },
};
