<template>
  <BaseTypography v-bind="$attrs" :tag="tag" type="content">
    <slot />
  </BaseTypography>
</template>

<script>
import BaseTypography from '~/components/Typography/BaseTypography.vue';

export default {
  name: 'BaseContent',
  components: { BaseTypography },
  props: {
    tag: { type: String, default: 'p' },
  },
};
</script>
