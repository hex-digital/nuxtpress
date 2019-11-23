/**
 * Add the /menu route to the wp object, under the wp.menu method call.
 * @param wp
 * @return {Function}
 */
export default (wp) =>
  (wp.menu = wp.registerRoute('wuxt/v1', '/menu', {
    params: ['location'],
  }));
