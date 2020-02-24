<template>
  <component :is="tag" class="v-fc-title-block">{{ contentItem.text }}</component>
</template>

<script>
const sizeToTag = {
  small: 'h5',
  standard: 'h4',
  medium: 'h3',
  large: 'h2',
};

export default {
  name: 'TitleBlock',
  props: {
    contentItem: { type: Object, required: true },
  },
  computed: {
    size() {
      return this.contentItem.size;
    },
    tag() {
      return sizeToTag[this.size] || 'h4';
    },
    text() {
      return this.contentItem.text;
    },
  },
};
</script>
