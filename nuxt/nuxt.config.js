import axios from 'axios';
import { build } from './config';
require('dotenv').config();

const debug = process.env.NUXTPRESS_NUXT_DEBUG ? process.env.NUXTPRESS_NUXT_DEBUG : false;
const wpUrl = process.env.NUXTPRESS_WP_URL ? process.env.NUXTPRESS_WP_URL : 'http://localhost:3080';

export default {
  debug,
  mode: 'universal',
  env: {
    nuxtDebug: debug,
    nuxtFrontUrl: process.env.NUXTPRESS_FRONT_URL || 'localhost:3000',
    NUXTPRESS_WP_PORT: process.env.NUXTPRESS_WP_PORT || '3080',
    NUXTPRESS_WP_URL: wpUrl,
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
  css: ['~/assets/scss/app.scss'],
  /*
   ** StyleResources: SCSS to load in all Vue components - don't load any outputted CSS here, just settings + tools
   */
  styleResources: {
    scss: ['~/assets/scss/settings-tools.scss'],
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/global-components.js', '~/plugins/vue-logger.js', '~/plugins/breakpoints.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc:https://github.com/nuxt-community/stylelint-module
    ['@nuxtjs/stylelint-module', { syntax: 'scss' }],
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { filename: '.env' }],
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
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
    ...build,
  },
  generate: {
    routes: () => {
      return axios.get(`${wpUrl}/wp-json/wuxt/v1/generate`).then(({ data }) => data);
    },
  },
};
