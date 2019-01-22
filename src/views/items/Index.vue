<template>
  <v-flex>
    <h2>Items Page</h2>
    <ItemList :items="items" />
    <v-btn to="/items/new">New Item</v-btn>
  </v-flex>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ItemList from '@/components/ItemList'

  export default {
    name: 'ItemsIndex',
    components: {
      ItemList
    },
    computed: {
      ...mapGetters({
        items: 'items/items'
      })
    },
    mounted() {
      this.$store.dispatch('items/getItems')
    }
  };
</script>
