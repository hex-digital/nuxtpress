<template>
  <div>
    <pre><code>{{ data }}</code></pre>
  </div>
</template>

<script>
export default {
  name: 'TemporaryPostData',
  props: {
    data: { type: Object, required: true },
  },
};
</script>

<style scoped>
code {
  background-color: #282c34;
  color: #abb2bf;
  display: block;
  font: normal 10pt Consolas, Monaco, monospace;
  max-height: 40em;
  margin: 16px;
  overflow-x: auto;
  overflow-y: auto;
  padding: 16px;
}
</style>
