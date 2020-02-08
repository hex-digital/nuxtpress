/**
 * Add the /options/options route to the wp object, under the wp.options method call.
 * @param wp
 * @return {Function}
 */
export default (wp) => (wp.options = wp.registerRoute('acf/v3', '/options/options'));
