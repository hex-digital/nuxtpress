<template>
  <div :class="coverClasses" :style="coverStyles">
    <slot name="header" />
    <slot />
    <slot name="footer" />
  </div>
</template>

<script>
// @todo Maybe the Cover can have the BgCover behaviour too somehow, so if you have a cover you don't need a bgcover
export default {
  name: 'Cover',
  props: {
    minHeight: { type: String, default: '100vh' },
    noPad: { type: Boolean, default: false },
    space: { type: String, default: '1.5rem' }, // @todo This should come from the modular sizings
  },
  computed: {
    coverClasses() {
      return {
        'o-cover': true,
        'o-cover--header': this.$slots.header,
        'o-cover--footer': this.$slots.footer,
      };
    },
    coverStyles() {
      return {
        minHeight: this.minHeight,
        padding: this.noPad ? '0' : this.space,
      };
    },
  },
};
</script>

<style lang="scss">
$defaultSpacing: 1.5rem; // @todo This should come from the modular sizings
$defaultMinHeight: 100vh;

.o-cover {
  display: flex;
  flex-direction: column;
  min-height: $defaultMinHeight;
  padding: $defaultSpacing;
}

.o-cover > * {
  margin-bottom: auto;
  margin-top: auto;
}

.o-cover--header > :first-child {
  margin-bottom: $defaultSpacing;
  margin-top: 0;
}

.o-cover--footer > :last-child {
  margin-bottom: 0;
  margin-top: $defaultSpacing;
}
</style>
