<template>
  <component :is="tag" :class="textClasses">
    <slot />
  </component>
</template>

<script>
const availableColors = ['primary', 'secondary', 'white', 'black']; // Should come from settings.colors theme map
const availableSizes = ['small', 'base', 'large', 'huge', 'massive']; // Should come from settings.text sizing map
const availableTypes = ['title', 'content'];

export default {
  name: 'BaseTypography',
  props: {
    bold: { type: Boolean, default: false },
    color: { type: String, default: 'black', validator: (value) => availableColors.includes(value) },
    size: { type: String, default: null, validator: (value) => availableSizes.includes(value) },
    static: { type: Boolean, default: false },
    tag: { type: String, default: 'p' },
    type: { type: String, default: 'content', validator: (value) => availableTypes.includes(value) },
    uppercase: { type: Boolean, default: false },
  },
  computed: {
    textClasses() {
      return {
        [`u-${this.type}`]: this.type,
        [`u-text--${this.size}`]: this.size,
        'u-text--responsive': !this.static,
        [`u-color-${this.color}`]: this.color,
        'u-bold': this.bold,
        'u-uppercase': this.uppercase,
      };
    },
  },
};
</script>
