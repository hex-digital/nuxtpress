<template>
  <div>
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

<style scoped></style>
