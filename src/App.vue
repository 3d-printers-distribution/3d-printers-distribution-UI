<template>
  <v-app>
    <v-app-bar
      app
      flat
    >
      <v-toolbar-title><router-link style="text-decoration:none;color:black;"
      :to="{ name: 'home' }"> 3DtoMeds</router-link></v-toolbar-title>
      <v-tabs align-with-title>
      <v-tab text :to="{ name: 'home' }">Home</v-tab>
      <v-tab v-if="userIsLoggedIn" text :to="{ name: 'dashboard' }">Dashboard</v-tab>
      <v-tab text :to="{ name: 'team' }">Team</v-tab>
      <v-tab text :to="{ name: 'about' }">About</v-tab>
        </v-tabs>
      <v-menu text v-if="userIsLoggedIn">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item :to="{name: 'myAccount'}">
          <v-list-item-title>My Account</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logoutPlease">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text v-else :to="{name: 'login'}">Login</v-btn>
    </v-app-bar>

    <v-content>
<!--      Removed for now, this is the Firebase Token-->
<!--      <v-container fluid v-if="userToken">-->
<!--        <v-alert dismissible color="info">-->
<!--          <p style="font-family: monospace; word-wrap: break-word; max-width: 95vw;">-->
<!--            token: {{userToken}}-->
<!--          </p>-->
<!--        </v-alert>-->
<!--      </v-container>-->
      <router-view></router-view>
    </v-content>

    <v-footer class="text-center">
      <v-container fluid>
        <v-alert dismissible color="primary" dark>
          30.3.2020: This site is not productive yet.
          We are still building the front- and back-end.
          Feel free to explore the site to test it's already existing functionality.
        </v-alert>
        <span>
          {{ new Date().getFullYear() }} — <strong>3DtoMeds</strong>
        </span>
      </v-container>
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
