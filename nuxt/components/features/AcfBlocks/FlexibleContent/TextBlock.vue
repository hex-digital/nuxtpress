<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div class="v-fc-text-block" v-html="contentItem[contentItem.acf_fc_layout]" />
</template>

<script>
export default {
  name: 'TextBlock',
  props: {
    contentItem: { type: Object, required: true },
  },
};
</script>
