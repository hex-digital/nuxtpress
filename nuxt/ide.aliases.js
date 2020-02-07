/**
 * This file is to help your IDE understand the aliases used in the project.
 * It should be used when an IDE asks for a webpack config.
 * VSCode users can use the jsconfig.json file instead.
 */
const path = require('path');

const rootPath = path.resolve(__dirname);

module.exports = {
  resolve: {
    // for IDEs intellisense only
    alias: {
      '@': rootPath,
      '@@': rootPath,
      '~': rootPath,
      '~~': rootPath,
    },
    extensions: [
      '.sass',
      '.scss',
      '.css',
      '.wasm',
      '.web.js',
      '.mjs',
      '.js',
      '.json',
      '.web.jsx',
      '.jsx',
      '.vue',
    ],
  },
};
