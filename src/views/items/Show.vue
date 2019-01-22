<template>
  <v-flex>
    <pre>{{item}}</pre>
  </v-flex>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'ItemShow',
    computed: {
      ...mapGetters({
        item: 'items/item'
      })
    },
    mounted() {
      this.$store.dispatch('items/getItem', this.$route.params.id)
    }
  };
</script>
