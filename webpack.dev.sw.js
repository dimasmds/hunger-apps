const { merge } = require('webpack-merge');
const { GenerateSW } = require('workbox-webpack-plugin');

const common = require('./webpack.dev');

module.exports = merge(common, {
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
  ],
});
