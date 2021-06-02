<template>
  <button @click="paginationHandler">
    {{ btnText }}
  </button>
</template>
<script>
export default {
  props: ["btnText"],
  methods: {
    paginationHandler() {
      this.$emit("onPaginationHandler");
    },
  },
};
</script>
<style scoped>
button {
  padding: 7.5px 15px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  margin-right: 15px;
  font-weight: bolder;
}
</style>
