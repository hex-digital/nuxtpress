<template>
  <div>
    <BaseTitle>Default Template</BaseTitle>
    <FlexibleContent :post="post" />
    <TemporaryPostData :post="post" />
  </div>
</template>

<script>
import FlexibleContent from '~/components/features/AcfBlocks/FlexibleContent.vue';
import TemporaryPostData from '~/components/features/TemporaryPostData.vue';

export default {
  name: 'DefaultTemplate',
  components: { FlexibleContent, TemporaryPostData },
  props: {
    post: { type: [Array, Object], default: () => ({}) },
  },
};
</script>
