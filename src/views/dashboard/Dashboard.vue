<template>
  <v-container class="dashboard">
    <v-card>
      <v-card-text>
        <span class="title">Zurich, Switzerland</span>
      </v-card-text>
    </v-card>

    <v-row>
      <v-col>
        <v-tabs
          icons-and-text
          grow
        >
          <v-tab :to="{ name: 'supply'}">
            Supply
            <v-icon>mdi-printer-3d</v-icon>
          </v-tab>
          <v-tab :to="{ name: 'distribute'}">
            Distribute
            <v-icon>mdi-truck-delivery</v-icon>
          </v-tab>
          <v-tab :to="{ name: 'demand'}">
            Demand
            <v-icon>mdi-medical-bag</v-icon>
          </v-tab>
        </v-tabs>

        <v-slide-x-transition mode="out-in">
          <router-view></router-view>
        </v-slide-x-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Dashboard',
  created() {
    if (this.$route.name === 'dashboard') this.$router.replace({ name: 'supply' });
  },
};
</script>

<style scoped></style>