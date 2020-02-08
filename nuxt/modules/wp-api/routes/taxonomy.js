/**
 * Add the /${taxonomy} route to the wp object, under the wp.cpt(postType) method call.
 * @param wp
 * @return {Function}
 */
export default (wp) =>
  (wp.taxonomy = (taxonomyType) => {
    wp[taxonomyType] = wp.registerRoute('wp/v2', '/' + taxonomyType, {
      params: ['embed', 'before', 'after', 'author', 'parent', 'post'],
    });
    return wp[taxonomyType]();
  });
