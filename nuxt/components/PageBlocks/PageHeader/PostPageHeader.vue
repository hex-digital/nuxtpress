<template>
  <BasePageHeader
    :title="post.acf.title_override || post.title.rendered"
    :body="post.acf.header_text"
    :image-object="post.acf.header_image"
  />
</template>

<script>
export default {
  name: 'PostPageHeader',
  props: {
    post: { type: Object, required: true },
  },
};
</script>
