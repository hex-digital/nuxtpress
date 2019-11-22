<template>
  <div class="o-cluster" :data-identifier="configIdentifier">
    <slot />
  </div>
</template>

<script>
import { stylesFromComponentConfig } from '../mixins/stylesFromComponentConfig';

export default {
  name: 'Cluster',
  mixins: [stylesFromComponentConfig],
  props: {
    align: { type: String, default: 'center' },
    justify: { type: String, default: 'center' },
    space: { type: String, default: '1.5rem' }, // @todo This needs to change to allow spacing size to be set (from modular sizings)
  },
  computed: {
    configVariables() {
      return `${this.align}${this.justify}${this.space}`;
    },
  },
  methods: {
    configStyles(selector) {
      return `
        ${selector} > * {
          justify-content: ${this.justify};
          align-items: ${this.align};
          margin: calc(${this.space} / 2 * -1);
        }

        ${selector} > * > * {
          margin: calc(${this.space} / 2);
        }
      `;
    },
  },
};
</script>

<style lang="scss">
$defaultSpacing: 1.5rem; // @todo This should come from the modular sizing

.o-cluster > * {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: calc(#{$defaultSpacing} / 2 * -1);
}

.o-cluster > * > * {
  margin: calc(#{$defaultSpacing} / 2);
}
</style>
