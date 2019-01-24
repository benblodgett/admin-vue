<template>
  <span>
    <v-navigation-drawer app dark fixed>
      <v-toolbar flat>
        <v-toolbar-title>Vue Admin</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Home</v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-group no-action value="true">
          <v-list-tile slot="activator" to="/items">
            <v-list-tile-action>
              <v-icon>room</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Items</v-list-tile-title>
          </v-list-tile>
          <v-list-tile to="/items/new">
            <v-list-tile-content>New Item</v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
  </span>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
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
