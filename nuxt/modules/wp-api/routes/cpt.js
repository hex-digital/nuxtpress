const defaultParams = ['embed', 'before', 'after', 'author', 'parent', 'post'];

/**
 * Add the /${postType}/${id} route to the wp object, under the wp.cpt(postType) method call.
 * @param wp
 * @return {Function}
 */
export default (wp) =>
  (wp.cpt = (postType, params = defaultParams) => {
    wp[postType] = wp.registerRoute('wp/v2', '/' + postType + '/(?P<id>)', { params });
    return wp[postType]();
  });
