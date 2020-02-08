const errorMixin = {
  props: {
    error: { type: Object, default: null },
  },
  computed: {
    debug() {
      return process.env.nuxtDebug;
    },
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
    message() {
      return this.error.message || 'Error';
    },
  },
};

export default errorMixin;
