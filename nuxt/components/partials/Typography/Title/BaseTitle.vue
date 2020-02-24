<template>
  <BaseTypography v-bind="$attrs" :bold="bold" :size="size" type="title">
    <slot />
  </BaseTypography>
</template>

<script>
import BaseTypography from '~/components/partials/Typography/BaseTypography.vue';

export default {
  name: 'BaseTitle',
  components: { BaseTypography },
  props: {
    bold: { type: Boolean, default: true },
    size: { type: String, default: 'large' },
  },
};
</script>
