<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script>
const availableAlign = ['top', 'middle', 'bottom', 'baseline', 'stretch'];
const availableDirection = ['row', 'row-reverse', 'column', 'column-reverse'];
const availableJustify = ['center', 'left', 'right', 'between', 'around', 'evenly'];
const availableSizes = ['small', 'base', 'big', 'large'];

/**
 * The cluster solves a common problem of grouping undetermined width, non-block elements together compactly, but with
 * consistent spacing to the sides and above or below the component. It does this without leaving extra space on the
 * end components, by stripping it away with a negative margin.
 *
 * It is great for grouping list items, buttons or anything else that needs consistent spacing.
 *
 * As it can position elements vertically and horizontally within a container, it can also be used as a direct flexbox
 * replacement. Justify will horizontally position and align will vertically position. It can be used to position
 * elements at opposite ends of a container with justify: space-between, or evenly along the container with
 * justify: space-around.
 */
export default {
  name: 'Cluster',
  props: {
    align: { type: String, default: 'middle', validator: (value) => availableAlign.includes(value) },
    deep: { type: Boolean, default: false },
    direction: { type: String, default: 'row', validator: (value) => availableDirection.includes(value) },
    justify: { type: String, default: 'center', validator: (value) => availableJustify.includes(value) },
    size: { type: String, default: 'base', validator: (value) => availableSizes.includes(value) },
    tag: { type: String, default: 'div' },
  },
  computed: {
    clusterSelector() {
      return this.deep ? 'v-deep-cluster' : 'v-cluster';
    },
    classes() {
      return {
        [this.clusterSelector]: true,
        [`${this.clusterSelector}--${this.align}`]: this.align,
        [`${this.clusterSelector}--${this.direction}`]: this.direction,
        [`${this.clusterSelector}--${this.justify}`]: this.justify,
        [`${this.clusterSelector}--${this.size}`]: this.size,
      };
    },
  },
};
</script>

<style lang="scss">
/**
     * You can override these default maps in your settings to output the classes you need, and not the ones you don't.
     */
$cluster-spacing-sizes: (
  '--small': 0.5rem,
  '--base': 1rem,
  '--big': 1.5rem,
  '--large': 2rem,
) !default;

$cluster-direction-values: (
  '--row': 'row',
  '--row-reverse': 'row-reverse',
  '--column': 'column',
  '--column-reverse': 'column-reverse',
) !default;

$cluster-justify-values: (
  '--left': 'flex-start',
  '--center': 'center',
  '--right': 'flex-end',
  '--between': 'space-between',
  '--around': 'space-around',
  '--evenly': 'space-evenly',
) !default;

$cluster-alignment-values: (
  '--top': 'flex-start',
  '--middle': 'center',
  '--bottom': 'flex-end',
  '--baseline': 'baseline',
  '--stretch': 'stretch',
) !default;

$_cluster-types: (
  '': (
    selector: '.v-cluster',
    suffix: '',
  ),
  'deep': (
    selector: '.v-deep-cluster',
    suffix: ' > *',
  ),
);

@each $_type-name, $_type-map in $_cluster-types {
  $_cluster-selector: map-get($_type-map, selector);
  $_cluster-suffix: map-get($_type-map, suffix);

  #{$_cluster-selector}#{$_cluster-suffix} {
    display: flex;
    flex-wrap: wrap;
  }

  @each $_direction-name, $_direction in $cluster-direction-values {
    #{$_cluster-selector}#{$_direction-name}#{$_cluster-suffix} {
      flex-direction: #{$_direction};
    }
  }

  @each $_size-name, $_size in $cluster-spacing-sizes {
    #{$_cluster-selector}#{$_size-name}#{$_cluster-suffix} {
      margin: calc(#{$_size} / 2 * -1);

      > * {
        margin: calc(#{$_size} / 2);
      }
    }
  }

  @each $_justify-name, $_value in $cluster-justify-values {
    #{$_cluster-selector}#{$_justify-name}#{$_cluster-suffix} {
      justify-content: #{$_value};
    }
  }

  @each $_align-name, $_value in $cluster-alignment-values {
    #{$_cluster-selector}#{$_align-name}#{$_cluster-suffix} {
      align-items: #{$_value};
    }
  }
}

@each $_align-name, $_value in $cluster-alignment-values {
  .v-cluster__item#{$_align-name} {
    align-self: #{$_value};
  }
}
</style>
