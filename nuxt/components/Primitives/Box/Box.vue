<template>
  <div class="o-box" :style="boxStyles">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Box',
  props: {
    padding: { type: String, default: '1.5rem' },
    borderWidth: { type: String, default: '1px' },
  },
  computed: {
    boxStyles() {
      return {
        border: `${this.borderWidth} solid`,
        padding: this.padding,
      };
    },
  },
};
</script>

<style lang="scss">
$defaultBorderWidth: 1px; // @todo This should maybe be from a map of project border sizings
$defaultPadding: 1.5rem; // @todo This should be a modular sizing

.o-box {
  background-color: inherit;
  border-width: $defaultBorderWidth;
  display: block;
  padding: $defaultPadding;
  /* ↓ For high contrast mode */
  outline: $defaultBorderWidth solid transparent;
  outline-offset: calc(#{$defaultBorderWidth} * -1);
}
</style>
