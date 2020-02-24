<template>
  <div>
    <TheNavbar />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '~/components/prefabs/TheNavbar.vue';
import TheFooter from '~/components/prefabs/TheFooter.vue';

export default {
  components: { TheNavbar, TheFooter },
};
</script>

<style></style>
