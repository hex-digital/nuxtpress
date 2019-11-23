export default function({ app }) {
  if (process.env.NODE_ENV === 'development') {
    app.$wp._options.endpoint =
      'http://localhost:' +
      (process.env.NUXTPRESS_PORT_BACKEND ? process.env.NUXTPRESS_PORT_BACKEND : '3080') +
      '/wp-json/';
  }
}
