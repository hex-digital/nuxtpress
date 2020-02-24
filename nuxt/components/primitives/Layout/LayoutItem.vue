<template>
  <div :class="layoutItemClasses">
    <slot />
  </div>
</template>

<script>
/**
 * Base Layout Item
 *
 * The Base Layout Item must only ever be used as a direct descendent of a Layout.
 *
 * By default, it spans 100% width of the layout it's placed in.
 * You can alter this defauly behaviour by passing a string to the r prop, stating a ratio of column / max columns.
 *
 * <Layout>
 *   <LayoutItem r="1/2">   <!-- This will span one half of the width of the layout -->
 *     Content
 *   </LayoutItem>
 * </Layout>
 *
 * You can also change this on a per breakpoint basis, by using the breakpoint name as a prop:
 *
 * <Layout>
 *   <!-- This will span one half by default, one third on tablet up, and one quarter on desktopSmall and above -->
 *   <LayoutItem r="1/2" tablet="1/3" desktopSmall="1/4">
 *     Content
 *   </LayoutItem>
 * </Layout>
 */

import { availableBreakpoints } from '~/utilities/frameworkSetup';

const breakpointProps = availableBreakpoints.reduce(
  (props, breakpoint) => ({
    ...props,
    [breakpoint]: { type: String, default: null },
  }),
  {}
);

export default {
  name: 'LayoutItem',
  props: {
    r: { type: String, default: '1/1' },
    ...breakpointProps,
  },
  computed: {
    layoutItemClasses() {
      return {
        'v-layout__item': true,
        [`u-${this.r}`]: this.r,
        ...availableBreakpoints.reduce(
          (breakpoints, breakpoint) => ({
            ...breakpoints,
            [`u-${this[breakpoint]}@${breakpoint}`]: this[breakpoint],
          }),
          {}
        ),
      };
    },
  },
};
</script>
