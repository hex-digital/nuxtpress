<template>
  <div :class="sideContentClasses" :data-identifier="this.configIdentifier">
    <slot />
  </div>
</template>

<script>
import { stylesFromComponentConfig } from '../mixins/stylesFromComponentConfig';
import { validateComponent } from '../mixins/validateComponent';

export default {
  name: 'SideContent',
  mixins: [stylesFromComponentConfig, validateComponent],
  props: {
    side: { type: String, default: 'left' },
    sideWidth: { type: String, default: null },
    contentMin: { type: String, default: '50%' },
    space: { type: String, default: '1.5rem' },
    noStretch: { type: Boolean, default: false },
  },
  computed: {
    sideContentClasses() {
      return {
        'o-side-content': true,
        'o-side-content--no-stretch': this.noStretch,
      };
    },
    adjustedSpace() {
      return this.space === '0' ? '0px' : this.space; // '0' doesn't work in calc, so must be 0px
    },
    configVariables() {
      return `${this.adjustedSpace}${this.side}${this.sideWidth}${this.contentMin}`;
    },
  },
  methods: {
    configStyles(selector) {
      const side = this.side === 'left' ? `:last-child` : `:first-child`;

      return `
        ${selector} > * {
          margin: calc(${this.adjustedSpace} / 2 * -1);
        }

        ${selector} > * > * {
          margin: calc(${this.adjustedSpace} / 2);
          ${this.sideWidth ? `flex-basis: ${this.sideWidth};` : ''}
        }

        ${selector} > * > ${side} {
          flex-basis: 0;
          flex-grow: 999;
          min-width: calc(${this.contentMin} - ${this.adjustedSpace});
        }
      `;
    },
    validateComponent() {
      const slotIsValid = true; // @todo Check that the slot contains one element, and that it has exactly two elements as direct children
      const contentMinIsPercentage = this.contentMin.includes('%');

      if (!slotIsValid) {
        console.error(
          '<SideContent> elements should have exactly one child element containing exactly two child elements of its own'
        );
      }
      if (!contentMinIsPercentage) {
        console.warn(
          'The value for each <SideContent> `contentMin` property should be a percentage. Otherwise overflow is likely to occur'
        );
      }
    },
  },
};
</script>

<style lang="scss">
$defaultSpacing: 1.5rem; // @todo This should come from the modular sizings

.o-side-content > * {
  display: flex;
  flex-wrap: wrap;
  margin: calc(#{$defaultSpacing} / 2 * -1);
}

.o-side-content > * > * {
  flex-grow: 1;
  margin: calc(#{$defaultSpacing} / 2);
}

.o-side-content--no-stretch > * {
  align-items: flex-start;
}
</style>
