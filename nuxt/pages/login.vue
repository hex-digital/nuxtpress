<template>
  <Cover>
    <Content>
      <BaseTitle>Login</BaseTitle>
      <BaseButton @click="login()">Login</BaseButton>
    </Content>
  </Cover>
</template>

<script>
export default {
  auth: 'guest',
  methods: {
    async login() {
      try {
        await this.$auth.login({ data: { username: 'hex', password: 'nuxtpress' } });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
