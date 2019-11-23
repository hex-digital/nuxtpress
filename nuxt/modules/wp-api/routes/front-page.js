/**
 * Add the /front-page route to the wp object, under the wp.frontPage method call.
 * @param wp
 * @return {Function}
 */
export default (wp) =>
  (wp.frontPage = wp.registerRoute('wuxt/v1', '/front-page', {
    params: ['embed'],
  }));
