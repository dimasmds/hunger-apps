const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webcomponentsjs = './node_modules/@webcomponents/webcomponentsjs';

const polyfills = [
  {
    from: resolve(`${webcomponentsjs}/webcomponents-bundle.js`),
    to: 'vendor',
    flatten: true,
  },
  {
    from: resolve(`${webcomponentsjs}/webcomponents-bundle.js.map`),
    to: 'vendor',
    flatten: true,
  },
  {
    from: resolve(`${webcomponentsjs}/webcomponents-loader.js`),
    to: 'vendor',
    flatten: true,
  },
  {
    from: resolve(`${webcomponentsjs}/bundles/`),
    to: 'vendor/bundles',
    flatten: true,
  },
  {
    from: resolve(`${webcomponentsjs}/custom-elements-es5-adapter.js`),
    to: 'vendor',
    flatten: true,
  },
];

module.exports = {
  entry: resolve(__dirname, 'src/scripts/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        ...polyfills,
        {
          from: resolve(__dirname, 'src/public/'),
          to: resolve(__dirname, 'dist/'),
        },
      ],
    }),
  ],
};
