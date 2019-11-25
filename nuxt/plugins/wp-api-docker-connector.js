export default function({ app }) {
  if (process.env.NODE_ENV === 'development') {
    app.$wp._options.endpoint =
      'http://localhost:' +
      (process.env.NUXTPRESS_WP_PORT ? process.env.NUXTPRESS_WP_PORT : '3080') +
      '/wp-json/';
  }
}
