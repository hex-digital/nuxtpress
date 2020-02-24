<template>
  <div :class="coverClasses" :style="coverStyles">
    <slot name="header" />
    <slot />
    <slot name="footer" />
  </div>
</template>

<script>
const availableSpaces = ['none', 'small', 'base', 'large'];

export default {
  name: 'Cover',
  props: {
    minHeight: { type: String, default: null },
    space: { type: String, default: 'base', validator: (value) => availableSpaces.includes(value) },
  },
  computed: {
    coverClasses() {
      return {
        'o-cover': true,
        'o-cover--header': this.$slots.header,
        'o-cover--footer': this.$slots.footer,
        [`o-cover--${this.space}`]: this.space,
      };
    },
    coverStyles() {
      const styles = {};
      if (this.minHeight) {
        styles.minHeight = this.minHeight;
      }

      return styles;
    },
  },
};
</script>

<style lang="scss" scoped>
$_default-spacing: $inuit-global-spacing-unit;
$_default-min-height: 100vh;
$_spaces: (
  '--none': 0,
  '--small': $inuit-global-spacing-unit-small,
  '--base': $inuit-global-spacing-unit,
  '--large': $inuit-global-spacing-unit-large,
);

.o-cover {
  display: flex;
  flex-direction: column;
  min-height: $_default-min-height;
  padding: $_default-spacing;
}

@each $_space-name, $_space-unit in $_spaces {
  .o-cover#{$_space-name} {
    padding: $_space-unit;
  }
}

::v-deep * {
  margin-bottom: auto;
  margin-top: auto;
}

.o-cover--header ::v-deep :first-child {
  margin-bottom: $_default-spacing;
  margin-top: 0;
}

.o-cover--footer ::v-deep :last-child {
  margin-bottom: 0;
  margin-top: $_default-spacing;
}
</style>
