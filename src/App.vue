<template>
  <v-app>
    <app-navigation></app-navigation>
    <v-content transition="slide-x-transition">
      <v-container fill-height v-if="loading == true">
        <v-flex>
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
            style="display:block; margin:0 auto"
          ></v-progress-circular>
        </v-flex>
      </v-container>
      <v-alert :value="error" type="error">
        {{errorMsg}}
      </v-alert>
      <v-container fluid fill-height :style="[loading ? 'opacity:0' : 'opacity:1']">
        <v-layout>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import AppNavigation from '@/components/AppNavigation';

export default {
  name: 'App',
  components: {
    AppNavigation
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      error: 'global/error',
      errorMsg: 'global/errorMsg',
      loading: 'global/loading'
    })
  },
};
</script>
