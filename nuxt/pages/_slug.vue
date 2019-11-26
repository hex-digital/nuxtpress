<template>
  <div>
    <PostPageHeader :post="post" />
    <TemporaryPostData :data="post" />
  </div>
</template>

<script>
import TemporaryPostData from '~/components/TemporaryPostData.vue';
import { postMeta } from '~/utilities/yoastHelpers';

export default {
  components: { TemporaryPostData },
  data: () => ({ post: {} }),
  head() {
    return this.post ? postMeta(this.post) : {};
  },
  async asyncData({ app, error, params }) {
    try {
      const data = await app.$wp
        .slug()
        .name(params.slug)
        .get();
      return { post: data };
    } catch (e) {
      const statusCode = e.data.status || 500;
      const message = e.message || 'There has been a problem retrieving data from the API';
      error({ statusCode, message });
    }
  },
};
</script>

<style scoped></style>
