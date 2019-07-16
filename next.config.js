const withTypescript = require('@zeit/next-typescript');
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const withOptimizedImages = require('next-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [withOptimizedImages],
  [withTypescript],
  [withCSS],
  [withLess,{
    cssModules: true, lessLoaderOptions:{
      javascriptEnabled: true
    },
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
      // localIdentName: "[local]",
    }
  }
  ],



]);
