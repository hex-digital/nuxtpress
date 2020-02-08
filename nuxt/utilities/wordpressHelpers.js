/**
 * Get the available sizes for responsive images for this theme.
 * @return {Object}
 */
export function getThemeSizes() {
  return {
    thumbnail: { width: 150, multiplier: 0.5 },
    medium: { width: 300, multiplier: 1 },
    medium_large: { width: 768, multiplier: 2.56 },
    large: { width: 1024, multiplier: 3.41 },
    '1536x1536': { width: 1536, multiplier: 5.12 },
    '2048x2048': { width: 2048, multiplier: 6.82 },
  };
}

/**
 * Defines the preferred order of image sizes that we would want to display an image at, if no size is specified.
 * @return {Array<string>}
 */
export function getPreferredSizeFallbackOrder() {
  return ['medium_large', 'large', '1536x1536', 'medium', '2048x2048', 'thumbnail'];
}

export function stripWordPressDomainFromUrl(url) {
  return url.replace(process.env.NUXTPRESS_WP_URL, '');
}
