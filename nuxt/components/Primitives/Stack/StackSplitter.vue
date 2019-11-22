<template>
  <div class="o-stack-splitter" aria-hidden />
</template>

<script>
/**
 * The Stack Splitter can be used instead of the `splitAfter` prop on the Stack, to do the same thing.
 * This can allow some further control over when to split the Stack in cases where using the prop is not ideal.
 *
 * See the Stack component for more details on the Stack.
 */
export default {
  name: 'StackSplitter',
};
</script>

<style lang="scss">
.o-stack-splitter {
  margin-bottom: auto;
}
</style>
