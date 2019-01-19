<template>
  <v-flex>
    <v-data-table :headers="headers" :items="items">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.title }}</td>
      </template>
    </v-data-table>
  </v-flex>
</template>

<script>
  export default {
    name: 'ItemList',
    props: {
      items: Array
    },
    data () {
      return {
        headers: [
          {
            text: 'Id',
            value: 'id'
          },
          {
            text: 'Title',
            value: 'title'
          }
        ]
      }
    }
  }
</script>
