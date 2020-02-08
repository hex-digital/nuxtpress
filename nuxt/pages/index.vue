<template>
  <div>
    <FlexibleContent :post="post" />
    <TemporaryPostData :data="post" />
  </div>
</template>

<script>
import FlexibleContent from '~/components/AcfBlocks/FlexibleContent.vue';
import TemporaryPostData from '~/components/TemporaryPostData.vue';
import { postMeta } from '~/utilities/yoastHelpers';

export default {
  components: { FlexibleContent, TemporaryPostData },
  data: () => ({ post: {} }),
  head() {
    return this.post ? postMeta(this.post) : {};
  },
  async asyncData({ app, error }) {
    try {
      const data = await app.$wp.frontPage().get();
      return { post: data };
    } catch (e) {
      error({ statusCode: 500, message: 'There has been a problem retrieving data from the API' });
    }
  },
};
</script>
