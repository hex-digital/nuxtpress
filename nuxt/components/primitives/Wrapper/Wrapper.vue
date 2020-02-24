<template>
  <div :is="tag" :class="wrapperClasses" :style="wrapperStyles" v-bind="$attrs">
    <slot />
  </div>
</template>

<script>
const availableGutters = ['none', 'small', null, 'large'];
const availableSizes = [null, 'small', 'base', 'large'];

export default {
  name: 'Wrapper',
  props: {
    center: { type: Boolean, default: false },
    centerText: { type: Boolean, default: false },
    content: { type: Boolean, default: false },
    gutters: { type: String, default: null, validator: (value) => availableGutters.includes(value) },
    intrinsic: { type: Boolean, default: false },
    maxWidth: { type: String, default: null }, // e.g. 60ch
    size: { type: String, default: 'base', validator: (value) => availableSizes.includes(value) },
    tag: { type: String, default: 'div' },
  },
  computed: {
    wrapperClasses() {
      return {
        'o-wrapper': true,
        'o-wrapper--center': this.center,
        'o-wrapper--center-text': this.centerText,
        'o-wrapper--content': this.content,
        'o-wrapper--intrinsic': this.intrinsic,
        [`o-wrapper--${this.size}`]: this.size,
        [`o-wrapper--${this.gutters}`]: this.gutters,
      };
    },
    wrapperStyles() {
      return this.maxWidth && this.content ? { maxWidth: this.maxWidth } : {};
    },
  },
};
</script>

<style lang="scss" scoped>
$_default-measure: 60ch; // Used only when an invalid maxWidth is provided as a prop
$_wrapper-spacing-sizes: (
  null: $inuit-global-spacing-unit,
  '--small': $inuit-global-spacing-unit-small,
  '--large': $inuit-global-spacing-unit-large,
  '--none': 0,
) !default; // In case one isn't provided by the framework
$_width-sizes: (
  '--small': 1020px,
  '--base': 1240px,
  '--large': 1400px,
);

.o-wrapper {
  box-sizing: border-box;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: $_default-measure;
  width: 100%;
}

@each $_width-name, $_width-unit in $_width-sizes {
  .o-wrapper#{$_width-name} {
    max-width: $_width-unit;
  }
}

@each $_spacing-name, $_spacing-unit in $_wrapper-spacing-sizes {
  .o-wrapper#{$_spacing-name} {
    padding-left: #{$_spacing-unit};
    padding-right: #{$_spacing-unit};
  }
}

.o-wrapper--content {
  box-sizing: content-box;
  margin-left: initial;
  margin-right: initial;
  padding-left: 0;
  padding-right: 0;
}

.o-wrapper--center {
  margin-left: auto;
  margin-right: auto;
}

.o-wrapper--center-text {
  text-align: center;
}

.o-wrapper--intrinsic {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
