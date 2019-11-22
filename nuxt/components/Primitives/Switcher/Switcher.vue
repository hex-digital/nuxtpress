<template>
  <div class="o-switcher" :data-identifier="configIdentifier">
    <slot />
  </div>
</template>

<script>
import { stylesFromComponentConfig } from '../mixins/stylesFromComponentConfig';

export default {
  name: 'Switcher',
  mixins: [stylesFromComponentConfig],
  props: {
    limit: { type: Number, default: 4 },
    space: { type: String, default: '1.5rem' }, // @todo This should come from the modular sizings
    threshold: { type: String, default: '60ch' },
  },
  computed: {
    configVariables() {
      return `${this.threshold}${this.adjustedSpace}${this.limit}`;
    },
    adjustedSpace() {
      return this.space === '0' ? '0px' : this.space;
    },
  },
  methods: {
    configStyles(selector) {
      // If threshold is 60ch, and the (width - adjustedSpace) is 50ch, sizeFromThreshold is 10.
      // If (width - adjustedSpace) was 70ch, sizeFromThreshold is -10.
      // @todo Improve the name of this variable to better describe it
      const sizeFromThreshold = `(${this.threshold} - (100% - ${this.adjustedSpace}))`;
      const limit = parseInt(this.limit);

      return `
        ${selector} > * {
          margin: calc((${this.adjustedSpace} / 2) * -1);
        }

        ${selector} > * > * {
          flex-basis: calc(${sizeFromThreshold} * 999);
          margin: calc(${this.adjustedSpace} / 2);
        }

        ${selector} > * > :nth-last-child(n+${limit + 1}),
        ${selector} > * > :nth-last-child(n+${limit + 1}) ~ * {
          flex-basis: 100%;
        }
      `;
    },
  },
};
</script>

<style lang="scss">
$defaultMeasure: 60ch;
$defaultSpace: 1.5rem; // @todo This should come from the modular sizings
$defaultThreshold: 4;

.o-switcher {
  display: block;
}

.o-switcher > * {
  display: flex;
  flex-wrap: wrap;
  margin: calc((#{$defaultSpace} / 2) * -1);
  overflow: hidden;
}

.o-switcher > * > * {
  flex-basis: calc((#{$defaultThreshold} - (100% - #{$defaultSpace})) * 999);
  flex-grow: 1;
  margin: calc(#{$defaultSpace} / 2);
}
</style>
