<template>
  <div>
    <TheNavbar />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '~/components/Layout/Navbar/TheNavbar.vue';
import TheFooter from '~/components/Layout/Footer/TheFooter.vue';

export default {
  components: { TheNavbar, TheFooter },
};
</script>

<style></style>
