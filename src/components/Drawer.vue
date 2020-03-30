<template>
  <v-navigation-drawer v-if="userIsLoggedIn" app v-model="drawer" class="primary lighten-3">
    <p>sl dkewfj oksjdl fkwjeofskjd flwleif lsdkfjweo </p>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  props: ['userIsLoggedIn', 'drawer'],
};
</script>

<style scoped>

</style>
