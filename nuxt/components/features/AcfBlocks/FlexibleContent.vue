<template>
  <div class="u-wysiwyg v-flexible-content">
    <template v-for="(contentItem, index) in flexibleContent">
      <component
        :is="getFlexibleComponent(contentItem.acf_fc_layout)"
        v-if="getFlexibleComponent(contentItem.acf_fc_layout)"
        :key="index"
        :content-item="contentItem"
      />
    </template>
  </div>
</template>

<script>
import { hasOwnProp } from '~/utilities/typeHelpers';
import TitleBlock from '~/components/features/AcfBlocks/FlexibleContent/TitleBlock';
import TextBlock from '~/components/features/AcfBlocks/FlexibleContent/TextBlock';

const blockTypeToComponentMap = {
  title_block: 'TitleBlock',
  text_block: 'TextBlock',
  rich_text_block: 'TextBlock',
};

export default {
  name: 'FlexibleContent',
  components: { TitleBlock, TextBlock },
  props: {
    post: { type: Object, required: true },
  },
  computed: {
    flexibleContent() {
      return (this.post && this.post.acf && this.post.acf.flexible_content) || []; // eslint-disable-line camelcase
    },
  },
  methods: {
    getFlexibleComponent(acfBlockType) {
      if (hasOwnProp(blockTypeToComponentMap, acfBlockType)) {
        return blockTypeToComponentMap[acfBlockType];
      }

      return null;
    },
  },
};
</script>

<style lang="scss">
.v-flexible-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  /**
   * Here we define spacing between common blocks, starting with a default spacing between all, then overrides
   * for those that need different spacings than the default.
   * Remember the rules cascade, so more general rules at the top, and more specific rules at the bottom.
   */
  > * + * {
    margin-top: 1rem;
  }
  > * + .v-fc-title-block {
    margin-top: 4.5rem;
  }
}
</style>
