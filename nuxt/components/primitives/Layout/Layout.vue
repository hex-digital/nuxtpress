<template>
  <div :class="layoutClasses"><slot /></div>
</template>

<script>
/**
 * Base Layout - A grid-like layout system.
 *
 * A Layout must only ever have LayoutItem components as immediate children.
 *
 * The layout object provides us with a column-style layout system. This file
 * contains the basic structural elements, but classes should be complemented
 * with width utilities, for example:
 *
 *   <Layout>
 *     <LayoutItem r="1/2">
 *     </LayoutItem>
 *     <LayoutItem r="1/2">
 *     </LayoutItem>
 *   </div>
 *
 * The above will create a two-column structure in which each column will
 * fluidly fill half of the width of the parent. We can have more complex
 * systems:
 *
 *   <Layout>
 *     <LayoutItem desktopSmall="1/3">
 *     </LayoutItem>
 *     <LayoutItem r="1/2" desktopSmall="1/3">
 *     </LayoutItem>
 *     <LayoutItem r="1/2" desktopSmall="1/3">
 *     </LayoutItem>
 *   </div>
 *
 * The above will create a system in which the first item will be 100% width
 * until we enter our desktopSmall breakpoint, when it will become 33.333% width. The
 * second and third items will be 50% of their parent, until they also become
 * 33.333% width at the desktopSmall breakpoint.
 *
 * We can also manipulate entire layout systems by adding a series of modifiers
 * to the Layout block. For example:
 *
 *   <Layout reverse>
 *
 * This will reverse the displayed order of the system so that it runs in the
 * opposite order to our source, effectively flipping the system over.
 *
 *   <Layout fill-direction="around">
 *
 * This will cause the system to fill up from the center, putting space around the layout items.
 * Default behaviour is to fill up the layout system from the left, similar to flex-start.
 *
 *   <Layout size="medium">
 *
 * This will cause each layout item to have a "medium" amount of space between them, inline with the spacing units.
 *
 *   <Layout align="stretch">
 *
 * This will cause all the layout items to be of the same height.
 */

const alignModes = ['top', 'middle', 'bottom', 'baseline', 'stretch'];
const directions = ['row', 'column'];
const fillDirections = ['left', 'right', 'center', 'around', 'between', 'evenly'];
const sizes = ['zero', 'small', 'base', 'large'];

export default {
  name: 'Layout',
  props: {
    autoWidth: { type: Boolean, default: false },
    align: { type: String, default: 'top', validator: (value) => alignModes.includes(value) },
    direction: { type: String, default: 'row', validator: (value) => directions.includes(value) },
    fillDirection: { type: String, default: 'left', validator: (value) => fillDirections.includes(value) },
    size: { type: String, default: 'base', validator: (value) => sizes.includes(value) },
    reverse: { type: Boolean, default: false },
  },
  computed: {
    layoutClasses() {
      return {
        'v-layout': true,
        'v-layout--auto': this.autoWidth,
        'v-layout--reverse': this.reverse,
        [`v-layout--${this.align}`]: this.align,
        [`v-layout--${this.direction}`]: this.direction,
        [`v-layout--${this.fillDirection}`]: this.fillDirection,
        [`v-layout--${this.size}`]: this.size,
      };
    },
  },
};
</script>

<style scoped lang="scss">
$flex-layout-spacing-sizes: (
  '--zero': spacing-unit('zero'),
  '--small': spacing-unit('small'),
  '--base': spacing-unit(),
  '--large': spacing-unit('large'),
) !default;

$flex-layout-justify-values: (
  '--left': 'flex-start',
  '--center': 'center',
  '--right': 'flex-end',
  '--between': 'space-between',
  '--around': 'space-around',
  '--evenly': 'space-evenly',
) !default;

$flex-layout-alignment-values: (
  '--top': 'flex-start',
  '--middle': 'center',
  '--bottom': 'flex-end',
  '--baseline': 'baseline',
  '--stretch': 'stretch',
) !default;

/* Default/mandatory classes
         ========================================================================== */

.v-layout {
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  padding: 0;
}

/**
     * 1. Cells are full-width and stack on top of each other by default.
     */

::v-deep .v-layout__item {
  flex: 0 1 auto;
  width: 100%; /* [1] */
}

/* Gutters
       ========================================================================== */

/**
     * 1. The map $inuit-flexgrid-spacing-sizes contains a `null` key which
     *    will be our default gutter size.
     * 2. Add a negative margin on one side only. That way we aren't required to use
     *    a wrapper with the same amount of spacing, though it's common to do so.
     * 3. Neutralize the left margin on `v-layout`.
     */

@each $size-namespace, $size in $flex-layout-spacing-sizes {
  .v-layout#{$size-namespace} {
    margin-left: -#{$size}; /* [2] */
    > ::v-deep .v-layout__item {
      padding-left: $size; /* [3] */
    }
  }
}

/* Automatically size cells by distributing them equally
       ========================================================================== */

.v-layout--auto {
  > ::v-deep .v-layout__item {
    flex: 1 0 0;
  }
}

/* Horizontal alignment
       ========================================================================== */

@each $namespace, $value in $flex-layout-justify-values {
  .v-layout#{$namespace} {
    justify-content: #{$value};
  }
}

/* Vertical alignment
       ========================================================================== */

@each $namespace, $value in $flex-layout-alignment-values {
  .v-layout#{$namespace} {
    align-items: #{$value};
  }

  ::v-deep .v-layout__item#{$namespace} {
    align-self: #{$value};
  }
}

/* Content distribution
       ========================================================================== */

.v-layout--reverse {
  flex-direction: row-reverse;
}

.v-layout--column {
  flex-direction: column;

  &.v-layout--reverse {
    flex-direction: column-reverse;
  }
}
</style>
