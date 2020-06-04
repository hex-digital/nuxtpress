<template>
  <component :is="template" :post="post" />
</template>

<script>
import canFindTemplate from '~/mixins/canFindTemplate';
import { postMeta } from '~/utilities/yoastHelpers';

export default {
  mixins: [canFindTemplate],
  async asyncData({ app, error, params }) {
    try {
      if (params.pathMatch === '') {
        return { post: (await app.$wp.frontPage())[0] };
      }

      const post = await app.$wp.slug().name(params.pathMatch);

      return { post };
    } catch (e) {
      const statusCode = (e && e.data && e.data.status) || 500;
      const message = e.message || 'There has been a problem retrieving data from the API';
      error({ statusCode, message });
    }
  },
  data: () => ({ post: {} }),
  head() {
    return this.post ? postMeta(this.post) : {};
  },
};
</script>
