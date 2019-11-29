import { getPreferredSizeFallbackOrder, getThemeSizes } from '~/utilities/wordpressHelpers';

export default class AcfImage {
  constructor(imageObject) {
    this.id = (imageObject.id ? imageObject.id : imageObject.ID) || null;
    this.title = imageObject.title || null;
    this.filename = imageObject.filename || null;
    this.filesize = imageObject.filesize || null;
    this.url = imageObject.url || null;
    this.link = imageObject.link || null;
    this.alt = imageObject.alt || null;
    this.author = imageObject.author || null;
    this.description = imageObject.description || null;
    this.caption = imageObject.caption || null;
    this.name = imageObject.name || null;
    this.status = imageObject.status || null;
    this.uploaded_to = imageObject.uploaded_to || null;
    this.date = imageObject.date || null;
    this.modified = imageObject.modified || null;
    this.menu_order = imageObject.menu_order || null;
    this.mime_type = imageObject.mime_type || null;
    this.type = imageObject.type || null;
    this.subtype = imageObject.subtype || null;
    this.icon = imageObject.icon || null;
    this.width = imageObject.width || null;
    this.height = imageObject.height || null;
    this.sizes = imageObject.sizes || null;
  }

  /**
   * Get the src of the image, for use in img src tags.
   * If a size is specified, will try to return that size. If not available, or not specified, will try to return the
   * image at a size specified by the preferred fallback order. If no sizes are available, will return the raw source.
   * @return {string|null}
   */
  getSrc(size) {
    if (this.sizes) {
      if (size && this.sizes[size]) {
        return this.sizes[size];
      }

      const fallbackSizes = getPreferredSizeFallbackOrder();
      const countSizes = fallbackSizes.length;

      for (let i = 0; i < countSizes; i++) {
        const fallbackSize = fallbackSizes[i];
        if (this.sizes[fallbackSize]) {
          return this.sizes[fallbackSize];
        }
      }
    }

    return this.url;
  }

  /**
   * Return a link to the raw image.
   * @return {string|null}
   */
  getRawSrc() {
    return this.url;
  }

  /**
   * @returns {string|null}
   */
  getAlt() {
    return this.alt;
  }

  /**
   * @returns {string|null}
   */
  getCaption() {
    return this.caption;
  }

  getThemeSizes() {
    return getThemeSizes();
  }

  /**
   * Get a string that can be put into an img srcset attribute, for this object.
   * @param {Array<String>|null} allowedSrcsetSizes
   * @param {Boolean} dimension
   * @return {string}
   */
  getSrcsetString(allowedSrcsetSizes = null, dimension = false) {
    const dimensionKey = dimension ? 'multiplier' : 'width';
    const suffix = dimension ? 'x' : 'w';

    const themeSizes = this.getThemeSizes();
    const sizeNames = Object.keys(themeSizes);

    const srcsetArray = sizeNames.map((size) => {
      if (!this.sizes[size]) return '';

      if (allowedSrcsetSizes !== null) {
        if (!allowedSrcsetSizes.includes(size)) return '';
      }

      return `${this.sizes[size]} ${themeSizes[size][dimensionKey]}${suffix}, `;
    });

    return srcsetArray.join('');
  }
}

/*
EXAMPLE RESPONSE OF AN ACFIMAGE FROM WORDPRESS:

"ID": 14,
"id": 14,
"title": "office-rooms",
"filename": "office-rooms.jpg",
"filesize": 580670,
"url": "http://localhost:3080/wp-content/uploads/2019/11/office-rooms.jpg",
"link": "http://localhost:3080/sample-page/office-rooms/",
"alt": "Alt text here",
"author": "1",
"description": "Description here",
"caption": "Caption text here",
"name": "office-rooms",
"status": "inherit",
"uploaded_to": 2,
"date": "2019-11-25 17:58:17",
"modified": "2019-11-25 17:58:32",
"menu_order": 0,
"mime_type": "image/jpeg",
"type": "image",
"subtype": "jpeg",
"icon": "http://localhost:3080/wp-includes/images/media/default.png",
"width": 2301,
"height": 1536,
"sizes": {
  "thumbnail": "http://localhost:3080/wp-content/uploads/2019/11/office-rooms-150x150.jpg",
  "thumbnail-width": 150,
  "thumbnail-height": 150,
  "medium": "http://localhost:3080/wp-content/uploads/2019/11/office-rooms-300x200.jpg",
  "medium-width": 300,
  "medium-height": 200,
  "medium_large": "http://localhost:3080/wp-content/uploads/2019/11/office-rooms-768x513.jpg",
  "medium_large-width": 768,
  "medium_large-height": 513,
  "large": "http://localhost:3080/wp-content/uploads/2019/11/office-rooms-1024x684.jpg",
  "large-width": 1024,
  "large-height": 684,
  "1536x1536": "http://localhost:3080/wp-content/uploads/2019/11/office-rooms-1536x1025.jpg",
  "1536x1536-width": 1536,
  "1536x1536-height": 1025,
  "2048x2048": "http://localhost:3080/wp-content/uploads/2019/11/office-rooms-2048x1367.jpg",
  "2048x2048-width": 2048,
  "2048x2048-height": 1367
}
 */
