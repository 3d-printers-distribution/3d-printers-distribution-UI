<template>
  <v-navigation-drawer v-if="userIsLoggedIn" app v-model="drawer" class="primary lighten-3">
    <v-layout column align-center>
      <v-flex class="mt-5">
        <v-avatar size="100" class="grey lighten-2">
          <v-icon size="100">mdi-account-circle</v-icon>
        </v-avatar>
      </v-flex>
      <v-flex class="mt-5">
        <div class="subtitle-1">{{user.email}}</div>
      </v-flex>
    </v-layout>

<!--    For printing out the whole user-object from the state:-->
<!--    <p class="mt-4 ml-1 red&#45;&#45;text text&#45;&#45;darken-4"> user: {{user}}</p>-->
  </v-navigation-drawer>
</template>

<script>

export default {
  name: 'Drawer',
  props: ['userIsLoggedIn', 'drawer', 'user'],
};
</script>

<style scoped>

</style>
