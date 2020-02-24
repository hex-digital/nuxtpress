<template>
  <div class="nuxt-error">
    <component :is="errorPage" :error="error" />
  </div>
</template>

<script>
import errorMixin from '~/mixins/errorMixin';
import Error404 from '~/components/features/Error/Error404.vue';
import Error500 from '~/components/features/Error/Error500.vue';

export default {
  name: 'NuxtError',
  mixins: [errorMixin],
  layout: 'default',
  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return Error404;
      }

      return Error500;
    },
  },
  head() {
    return { title: this.message };
  },
};
</script>
