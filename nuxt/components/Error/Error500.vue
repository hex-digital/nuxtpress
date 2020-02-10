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

    <BaseTitle tag="h2" class="u-margin-bottom-zero">
      It seems this website has encountered a problem, and couldn't display the page content.
    </BaseTitle>
    <BaseText>({{ message }})</BaseText>

    <BaseTitle class="u-margin-bottom-zero" size="base">
      Is this the first time seeing this page?
    </BaseTitle>
    <BaseText>
      If this is the first time you've seen this page, try refreshing to see if the problem goes away.
    </BaseText>

    <BaseTitle class="u-margin-bottom-zero" size="base">
      Do you keep seeing this page?
    </BaseTitle>
    <BaseText>
      If you keep seeing this error page, please
      <WpLink class="u-color-black u-underline" to="/contact">contact us</WpLink> so we can correct the
      mistake.
    </BaseText>

    <BaseText>
      Alternatively, try going to the <a class="u-color-black u-underline" href="/">homepage</a> or click a
      link from the side menu to try again.
    </BaseText>
    <WpLink
      to="https://http://twitter.com/MGHMolbio/"
      class="u-color-black u-underline u-margin-bottom-small"
    >
      Find us on Twitter
    </WpLink>
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
