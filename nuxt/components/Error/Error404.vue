<template>
  <div class="v-error">
    <div class="v-error__title">
      <svg
        class="v-error__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        fill="#000"
        viewBox="0 0 48 48"
      >
        <path
          d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
        />
      </svg>
      <BaseTitle class="u-margin-bottom-zero">{{ statusCode }}</BaseTitle>
    </div>

    <BaseTitle tag="h2" class="u-margin-bottom-zero">We can't seem to find this page</BaseTitle>
    <BaseText>({{ errorUrl }})</BaseText>
    <BaseTitle class="u-margin-bottom-zero" size="base">
      Did you follow a link from another page on {{ frontUrl }}?
    </BaseTitle>
    <BaseText>
      If you reached this page from another part of the {{ frontUrl }} site, please
      <WpLink class="u-color-black u-underline" to="/contact">contact us</WpLink> so we can correct the
      mistake.
    </BaseText>

    <BaseTitle class="u-margin-bottom-zero" size="base">Did you follow a link from another site?</BaseTitle>
    <BaseText>
      Links from other sites can sometimes be outdated or misspelled. Please
      <WpLink class="u-color-black u-underline" to="/contact">contact us</WpLink> with the site name so we can
      speak to them and fix the problem.
    </BaseText>

    <BaseTitle class="u-margin-bottom-zero" size="base">Did you type the URL?</BaseTitle>
    <BaseText>
      You may have typed the address (URL) incorrectly. Please check the spelling and capitalisation and try
      again.
    </BaseText>
    <BaseText>
      None of those? Go to the <a class="u-color-black u-underline" href="/">homepage</a> or click a link from
      the side menu.
    </BaseText>
    <br />
  </div>
</template>

<script>
import errorMixin from '~/mixins/errorMixin';

export default {
  name: 'Error404',
  mixins: [errorMixin],
  computed: {
    frontUrl() {
      return process.env.nuxtFrontUrl;
    },
    errorUrl() {
      return process.env.nuxtFrontUrl + this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-error__title {
  align-items: center;
  display: flex;
}
.v-error__icon {
  fill: color('black');
  height: 56px;
  margin-bottom: 8px;
  margin-right: spacing-unit('x-small');
  width: 56px;
}
</style>
