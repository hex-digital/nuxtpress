<template>
  <div :class="contentClasses" :style="contentStyles">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    centerText: { type: Boolean, default: false },
    gutters: { type: String, default: '1.5rem' },
    intrinsic: { type: Boolean, default: false },
    maxWidth: { type: String, default: '60ch' },
    wrapper: { type: Boolean, default: false },
  },
  computed: {
    contentClasses() {
      return {
        'o-content': true,
        'o-content--center-text': this.centerText,
        'o-content--intrinsic': this.intrinsic,
        'o-content--wrapper': this.wrapper,
      };
    },
    contentStyles() {
      return {
        paddingLeft: this.gutters,
        paddingRight: this.gutters,
        maxWidth: this.maxWidth,
      };
    },
  },
};
</script>

<style lang="scss">
$defaultMeasure: 60ch;

.o-content {
  box-sizing: content-box;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: $defaultMeasure;
}

.o-content--wrapper {
  box-sizing: border-box;
}

.o-content--center-text {
  text-align: center;
}

.o-content--intrinsic {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
