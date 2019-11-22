<template>
  <section>
    <Content>
      <Stack>
        <BaseTitle>
          {{ post.title.rendered }}
        </BaseTitle>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="post.content.rendered" />
      </Stack>
    </Content>
  </section>
</template>

<script>
export default {
  data: () => ({
    post: {},
    error: [],
  }),
  head() {
    return {
      title: this.post.yoast_meta.find((metaItem) => metaItem.property === 'og:title').content,
      meta: this.post.yoast_meta,
      script: [
        {
          hid: 'ldjson-schema',
          type: 'application/ld+json',
          json: this.post.yoast_json_ld[0],
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'ldjson-schema': ['json'],
      },
    };
  },
  async asyncData({ $axios, params }) {
    try {
      const data = await $axios.$get(`http://wiredscore-wordpress.test/wp-json/wp/v2/posts/${params.id}`);
      return { post: data };
    } catch (error) {
      return { error };
    }
  },
};
</script>
