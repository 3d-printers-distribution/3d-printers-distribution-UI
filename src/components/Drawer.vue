<template>
  <v-navigation-drawer v-if="userIsLoggedIn" app v-model="drawer" class="primary lighten-3">
    <p> user: {{user}}
    </p>
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
