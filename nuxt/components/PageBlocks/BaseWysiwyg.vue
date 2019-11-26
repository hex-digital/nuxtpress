<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-bind="$attrs" class="u-wysiwyg" v-html="body" />
</template>

<script>
export default {
  name: 'BaseWysiwyg',
  props: {
    body: { type: String, required: true },
  },
};
</script>

<style lang="scss">
.u-wysiwyg {
  p {
    margin-bottom: 0;
  }
  p + p {
    margin-top: 1em;
  }
}
</style>
