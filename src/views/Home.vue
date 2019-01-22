<template>
  <v-flex>
    <h2>Home</h2>
  </v-flex>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('global/updateLoading', false)
    }
  };
</script>
