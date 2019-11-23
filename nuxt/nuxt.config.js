import axios from 'axios';

export default {
  mode: 'universal',
  env: {
    NUXTPRESS_PORT_BACKEND: process.env.NUXTPRESS_PORT_BACKEND || '3080',
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://use.typekit.net/edv4wvt.css' },
    ],
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
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '~/modules/static/',
    [
      '~/modules/wp-api/index',
      {
        endpoint:
          'http://' +
          (process.env.NUXTPRESS_WP_CONTAINER ? process.env.NUXTPRESS_WP_CONTAINER : 'wp.nuxtpress') +
          ':80/wp-json/',
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
    extend(config, ctx) {},
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
      return axios
        .get(
          'http://' +
            (process.env.NUXTPRESS_WP_CONTAINER ? process.env.NUXTPRESS_WP_CONTAINER : 'wp.nuxtpress') +
            ':80/wp-json/wuxt/v1/generate'
        )
        .then(({ data }) => data);
    },
  },
};
