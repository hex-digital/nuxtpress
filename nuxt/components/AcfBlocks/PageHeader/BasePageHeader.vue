<template>
  <div class="v-page-header">
    <BaseTitle tag="h2">{{ title }}</BaseTitle>
    <BaseWysiwyg v-if="body" :body="body" />
    <ImageObject v-if="imageObject" :image-object="imageObject" />
  </div>
</template>

<script>
export default {
  name: 'BasePageHeader',
  props: {
    title: { type: String, required: true },
    imageObject: { type: Object, default: null },
    body: { type: String, default: null },
  },
};
</script>

<style scoped lang="scss">
.v-page-header {
  margin-bottom: 4.5rem;
}
</style>
