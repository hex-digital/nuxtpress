export default {
  /*
   ** You can extend webpack config here
   */
  extend(config, ctx) {
    if (ctx.isDev) {
      // Allow nicer debugging for the SSR parts of the app by inlining the source maps
      config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map';
    }
  },
  babel: {
    presets({ isServer }) {
      return [
        [
          require.resolve('@nuxt/babel-preset-app'),
          {
            buildTarget: isServer ? 'server' : 'client',
            corejs: { version: 3 },
          },
        ],
      ];
    },
  },
};
