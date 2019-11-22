<template>
  <div class="o-ratio" :style="ratioStyles">
    <slot />
  </div>
</template>

<script>
import { validateComponent } from '../mixins/validateComponent';

export default {
  name: 'Ratio',
  mixins: [validateComponent],
  props: {
    ratio: {
      type: String,
      required: true,
      validator: (value) => value.includes(':'),
    },
  },
  computed: {
    ratioStyles() {
      return {
        paddingBottom: `calc(${this.ratioObject.width} / ${this.ratioObject.height} * 100%);`,
      };
    },
    ratioObject() {
      const ratioArray = this.ratio.split(':');
      return { width: ratioArray[0], height: ratioArray[1] };
    },
  },
  methods: {
    validateComponent() {
      const slotHasOneChild = true; // @todo Check that the slot contains just one element
      const ratioIsRatio = this.ratio.includes(':');

      if (!slotHasOneChild) {
        console.error('<Ratio> elements should have just one child element');
      }
      if (!ratioIsRatio) {
        console.error(
          `The value for each <Ratio> 'ratio' property should be a ratio, x:y, otherwise it will not work. Current value is ${this.ratio}`
        );
      }
    },
  },
};
</script>

<style lang="scss">
$defaultRatio: 6/9;

.o-ratio {
  display: block;
  padding-bottom: calc(#{$defaultRatio} * 100%);
  position: relative;
}

.o-ratio > * {
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.o-ratio > img,
.o-ratio > video {
  height: 100%;
  object-fit: cover;
  width: 100%;
}
</style>
