<template>
  <v-app>
    <v-app-bar
      app
      flat
    >
      <v-toolbar-title><router-link style="text-decoration:none;color:black;"
      :to="{ name: 'home' }"> 3DtoMeds</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text :to="{ name: 'dashboard' }">Dashboard</v-btn>
      <v-btn text :to="{ name: 'team' }">Team</v-btn>
      <v-btn text :to="{ name: 'about' }">About</v-btn>
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
