<template>
  <v-container class="Dashboard">
    <v-tabs
      icons-and-text
      grow
    >
      <v-tab
        :to="{ name: 'supply'}"
      >
        Supply
        <v-icon>mdi-printer-3d</v-icon>
      </v-tab>
      <v-tab
      >
        Distribute
        <v-icon>mdi-truck-delivery</v-icon>
      </v-tab>
      <v-tab
      >
        Demand
        <v-icon>mdi-medical-bag</v-icon>
      </v-tab>
    </v-tabs>
    <v-slide-x-transition>
      <router-view></router-view>
    </v-slide-x-transition>
  </v-container>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>

<style scoped></style>
