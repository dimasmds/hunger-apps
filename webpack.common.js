const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInjector = require('html-webpack-injector');

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
  entry: {
    polyfill_head: resolve(__dirname, 'src/scripts/utils/polyfill.js'),
    main: resolve(__dirname, 'src/scripts/index.js'),
  },

  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css|\.s([ca])ss$/,
        use: [{
          loader: 'lit-scss-loader',
          options: {
            minify: true,
          },
        }, 'extract-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/templates/template.html'),
      filename: 'template.html',
      inject: true,
      chunks: ['main', 'polyfill_head'],
    }),
    new HtmlWebpackInjector(),
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
