<template>
  <div>
    <h4>Navbar</h4>
    <template v-for="(item, index) in items">
      <WpLink :key="index" :to="item.getUrl()">{{ item.getText() }}</WpLink>

      <template v-for="(childItem, childIndex) in item.getChildren()">
        <WpLink :key="`childItem${childIndex}`" :to="childItem.getUrl()">{{ childItem.getText() }}</WpLink>
      </template>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TheNavbar',
  computed: {
    ...mapGetters({
      items: 'navMenus/mainItems',
    }),
  },
};
</script>
