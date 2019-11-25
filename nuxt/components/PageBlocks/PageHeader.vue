<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-if="body" v-html="body" />
    <div v-if="image">{{ image }}</div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: { type: String, required: true },
    image: { type: Object, default: null }, // @todo Replace this with something special for handling WordPress images
    body: { type: String, default: null },
  },
};
</script>

<style scoped></style>
