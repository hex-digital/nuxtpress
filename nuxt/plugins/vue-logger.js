import Vue from 'vue';
import VueLogger from 'vuejs-logger';

const isProduction = process.env.NODE_ENV === 'production';
const defaultLogLevel = isProduction ? 'error' : 'debug';

const options = {
  isEnabled: true,
  logLevel: process.env.NUXTPRESS_NUXT_LOG_LEVEL || defaultLogLevel,
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true,
};

Vue.use(VueLogger, options);
