<template>
  <div :class="spaceClasses" aria-hidden="true" />
</template>

<script>
export default {
  name: 'StripSpace',
  props: {
    size: { type: String, default: null },
  },
  computed: {
    spaceClasses() {
      return {
        'v-strip-space': true,
        [`v-strip-space--${this.size}`]: this.size,
      };
    },
  },
};
</script>

<style scoped lang="scss">
$strip-size-map: (
  null: 2rem,
  '--tiny': 0.5rem,
  '--small': 1rem,
  '--large': 3rem,
  '--huge': 4rem,
  '--massive': 5rem,
) !default;

@each $size-name, $padding in $strip-size-map {
  .v-strip-space#{$size-name} {
    padding: $padding;
  }
}
</style>
