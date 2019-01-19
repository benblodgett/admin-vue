<template>
  <span>
    <v-navigation-drawer v-model="drawer" app dark fixed>
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-content>Home</v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile to="/items">
          <v-list-tile-content>Items</v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Vue Admin</v-toolbar-title>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      drawer: true,
    }
  }
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
