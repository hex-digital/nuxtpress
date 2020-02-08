<template>
  <div>
    <TheNavbar />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue';
import TheFooter from '~/components/TheFooter.vue';

export default {
  components: { TheNavbar, TheFooter },
};
</script>

<style></style>
