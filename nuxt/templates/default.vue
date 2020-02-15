<template>
  <div>
    <BaseTitle>Default Template</BaseTitle>
    <FlexibleContent :post="post" />
    <TemporaryPostData :post="post" />
  </div>
</template>

<script>
import FlexibleContent from '~/components/AcfBlocks/FlexibleContent.vue';
import TemporaryPostData from '~/components/TemporaryPostData.vue';

export default {
  name: 'DefaultTemplate',
  components: { FlexibleContent, TemporaryPostData },
  props: {
    post: { type: [Array, Object], default: () => ({}) },
  },
};
</script>
