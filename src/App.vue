<template>
  <v-app>
    <v-app-bar
      app
      flat
    >
      <v-toolbar-title>3DtoMeds</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text :to="{name: 'Home'}">Home</v-btn>
      <v-btn text :to="{name: 'Contact'}">Contact</v-btn>
      <v-btn text :to="{name: 'About'}">About</v-btn>
      <v-btn text v-if="login"> Logout</v-btn>
      <v-btn text v-else> Login</v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      login: false,
    };
  },
};

</script>
