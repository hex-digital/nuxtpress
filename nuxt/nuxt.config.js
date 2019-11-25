import axios from 'axios';

const wpUrl = process.env.NUXTPRESS_WP_URL ? process.env.NUXTPRESS_WP_URL : 'http://localhost:3080';

export default {
  debug: true,
  mode: 'universal',
  env: {
    NUXTPRESS_WP_PORT: process.env.NUXTPRESS_WP_PORT || '3080',
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#683ba3' },
  /*
   ** Global CSS
   */
  css: ['assets/scss/app.scss'],
  /*
   ** StyleResources: SCSS to load in all Vue components - don't load any outputted CSS here, just settings + tools
   */
  styleResources: {
    scss: ['assets/scss/settings-tools.scss'],
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/globalComponents.js', { src: '~/plugins/wp-api-docker-connector', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '~/modules/static/',
    [
      '~/modules/wp-api/index',
      {
        endpoint: `${wpUrl}/wp-json/`,
      },
    ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
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
  },
  generate: {
    routes: () => {
      return axios.get(`${wpUrl}/wp-json/wuxt/v1/generate`).then(({ data }) => data);
    },
  },
};
