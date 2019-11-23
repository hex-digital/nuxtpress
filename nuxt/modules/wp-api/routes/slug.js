/**
 * Add the /slug/${name} route to the wp object, under the wp.slug method call.
 * @param wp
 * @return {Function}
 */
export default (wp) =>
  (wp.slug = wp.registerRoute('wuxt/v1', '/slug/(?P<name>)', {
    params: ['embed'],
  }));
