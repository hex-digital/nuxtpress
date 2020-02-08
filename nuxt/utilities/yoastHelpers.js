/**
 * From an object representing a post, extract the post meta in a way that can be utilised by vue-meta.
 * @param {Object} post
 * @return {Object}
 */
export function postMeta(post) {
  const postMeta = {};
  const title = getPostTitle(post);
  const meta = addHidToMeta(updateUrls(getPostMeta(post)));
  const jsonLd = createJsonLdMeta(updateUrls(getPostJsonLd(post)));

  if (title) {
    postMeta.title = title.replace('&amp;', '&');
  }
  if (meta) {
    postMeta.meta = meta;
  }
  if (jsonLd) {
    Object.assign(postMeta, jsonLd);
  }

  return postMeta;
}

/**
 * @param {Object} post
 * @return {String|null}
 */
function getPostTitle(post) {
  return post.yoast_title || null;
}

/**
 * @param {Object} post
 * @return {Array|null}
 */
function getPostMeta(post) {
  return post.yoast_meta || null;
}

/**
 * @param {Object} post
 * @return {Object|null}
 */
function getPostJsonLd(post) {
  if (post && post.yoast_json_ld && post.yoast_json_ld[0]) {
    return post.yoast_json_ld[0];
  }

  return null;
}

/**
 * The API will return meta URLs that point to the original CMS, instead of the front end origin.
 * This method will change those URLs to point to the front end instead. For use with adding canonical URls, or og:url.
 * @param {*} meta
 * @return {*}
 */
function updateUrls(meta) {
  return meta;
}

/**
 * Vue Meta requires a unique hid on each meta attribute, to avoid duplicating the same meta. This function adds that hid.
 * Some meta have a name and some have a property, so we need to pull this hid from whichever one exists.
 * See: https://stackoverflow.com/questions/22350105/whats-the-difference-between-meta-name-and-meta-property
 * @param {Array<Object>|null} meta
 * @return {Array}
 */
function addHidToMeta(meta) {
  if (!meta) return null;

  return meta.map((metaData) => {
    const { name, property } = metaData;
    if (typeof name === 'undefined' && typeof property === 'undefined') return {};

    const hid = typeof name !== 'undefined' ? name : property;

    return Object.assign(metaData, { hid });
  });
}

/**
 * From a JSON Object of the json-ld schema, create the necessary meta tags for use with Vue Meta.
 * See: https://json-ld.org/
 * @param {Object|null} jsonLdData
 * @return {Object|null}
 */
function createJsonLdMeta(jsonLdData) {
  if (!jsonLdData) return null;

  return {
    script: [
      {
        hid: 'ldjson-schema',
        type: 'application/ld+json',
        json: jsonLdData,
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'ldjson-schema': ['json'],
    },
  };
}
