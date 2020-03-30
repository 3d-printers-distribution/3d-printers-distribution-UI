<template>
  <v-app>
    <v-app-bar
      app
      flat
    >
      <v-toolbar-title><v-btn :to="{ name: 'home' }"> 3DtoMeds</v-btn></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text :to="{ name: 'team' }">Team</v-btn>
      <v-btn text :to="{ name: 'about' }">About</v-btn>
      <v-btn text :to="{ name: 'dashboard' }">Dashboard</v-btn>
      <v-btn text v-if="userIsLoggedIn" @click="logoutPlease">Logout</v-btn>
      <v-btn text v-else :to="{name: 'login'}">Login</v-btn>
    </v-app-bar>

    <v-content>
      <v-container fluid v-if="userToken">
        <v-alert dismissible color="info">
          <p style="font-family: monospace; word-wrap: break-word; max-width: 95vw;">
            token: {{userToken}}
          </p>
        </v-alert>
      </v-container>
      <router-view></router-view>
    </v-content>
    <v-footer
      dark
      padless
    >
      <v-container
        fluid
        class="red lighten-2 pa-md-12 my-4 text-center"
      >
        <div class="headline">
          30.3.2020: This site is not productive yet. We are still building the front- and back-end.
          Feel free to explore the site to test it's already existing functionality.
        </div>
      </v-container>
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center v-picker--full-width"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>3DtoMeds</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState(['userToken']),
    userIsLoggedIn() {
      return !!this.$store.state.user;
    },
  },
  methods: {
    logoutPlease() {
      this.$store.dispatch('signOut');
    },
  },
};
</script>
