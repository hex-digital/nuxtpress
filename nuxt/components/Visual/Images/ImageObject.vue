<template>
  <figure>
    <img
      :alt="altText"
      :src="image.getSrc(fallbackSize)"
      :srcset="image.getSrcsetString(allowedSrcsetSizes)"
      :sizes="srcsetRules"
    />
    <figcaption>{{ captionText }}</figcaption>
  </figure>
</template>

<script>
import AcfImage from '~/models/WordPress/AcfImage';

/**
 * This component is used to display an image from the data returned by ACF for an Image Object.
 * Simply pass in the image object data and an img tag with srcset data will be automatically created.
 *
 * You can restrict which srcset will be used, by passing an array of size names to allowedSrcsetSizes.
 * Furthermore, you can specify the sizes attribute of the img using the srcsetRules prop. This is a string that will
 * be added to sizes, such as "(max-width: 320px) 280px, (max-width: 480px) 440px, 800px".
 *
 * Browsers that do not support srcset will use have one of the sizes chosen for them to use instead. Override this with
 * the fallbackSize prop, to specify which size to fallback to.
 * The blankAlt prop allows us to add an empty alt attribute. This should only be done when there is some other text
 * near the image that provides context for that image already.
 *
 * Setting showCaption to true will add a figcaption to the image, displaying the caption text defined on the image.
 * You can override this text with the captionOverride prop. Passing text to captionOverride without setting showCaption
 * will not display a caption.
 */
export default {
  name: 'ImageObject',
  props: {
    imageObject: { type: Object, required: true },
    allowedSrcsetSizes: { type: Array, default: () => ['thumbnail', 'medium', 'medium_large', 'large'] },
    blankAlt: { type: Boolean, default: false },
    captionOverride: { type: String, default: '' },
    showCaption: { type: Boolean, default: false },
    fallbackSize: { type: String, default: null },
    srcsetRules: { type: String, default: null },
  },
  computed: {
    image() {
      return new AcfImage(this.imageObject);
    },
    altText() {
      return this.blankAlt ? '' : this.image.getAlt();
    },
    captionText() {
      return this.captionOverride ? this.captionOverride : this.image.caption;
    },
  },
};
</script>

<style scoped></style>
