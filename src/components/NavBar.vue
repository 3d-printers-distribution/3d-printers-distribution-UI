<template>
      <v-app-bar
        app
        flat
      >
        <v-toolbar-title><router-link style="text-decoration:none;color:black;"
        :to="{ name: 'home' }"> 3DtoMeds</router-link></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-if="userIsLoggedIn" text :to="{ name: 'dashboard' }">Dashboard</v-btn>
        <v-btn text :to="{ name: 'team' }">Team</v-btn>
        <v-btn text :to="{ name: 'about' }">About</v-btn>
        <v-btn text v-if="userIsLoggedIn" @click="logoutPlease">Logout</v-btn>
        <v-btn text v-else :to="{name: 'login'}">Login</v-btn>
      </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped>

</style>
