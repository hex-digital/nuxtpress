const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: path.resolve(__dirname, '../assets/scss/settings-tools.scss'),
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.resolve.alias['@'] = path.dirname(path.resolve(__dirname));
  config.resolve.alias['@@'] = path.dirname(path.resolve(__dirname));
  config.resolve.alias['~'] = path.dirname(path.resolve(__dirname));
  config.resolve.alias['~~'] = path.dirname(path.resolve(__dirname));

  // Return the altered config
  return config;
};
