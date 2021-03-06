const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const { GenerateSW } = require('workbox-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://dicoding-restaurant-api.el.r.appspot.com/list'),
          handler: 'StaleWhileRevalidate',
        },
        {
          urlPattern: new RegExp('https://dicoding-restaurant-api.el.r.appspot.com/detail/'),
          handler: 'NetworkFirst',
        },
        {
          urlPattern: new RegExp('https://dicoding-restaurant-api.el.r.appspot.com/images/'),
          handler: 'StaleWhileRevalidate',
        },
        {
          urlPattern: new RegExp('https://fonts.gstatic.com/'),
          handler: 'StaleWhileRevalidate',
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
});
