export const validateComponent = {
  beforeMount() {
    this.validateComponent();
  },
  beforeUpdate() {
    this.validateComponent();
  },
  methods: {
    /**
     * This method must be implemented.
     * It should return a boolean, showing whether the component has been used correctly.
     * It could also trigger errors for irrecoverable faults, or log warnings for misuse.
     * @returns {boolean}
     */
    validateComponent() {
      return true;
    },
  },
};
