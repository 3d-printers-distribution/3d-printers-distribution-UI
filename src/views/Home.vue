<template>
  <v-container
    fluid
    class="home grey pa-md-12"
  >
    <v-row>
      <img src="../assets/images/virus-outline-2.svg" alt="logo">
      <v-col
        align-self="center"
        class="pa-8 ma-8"
      >
        <h2 class="headline pb-2">Empowering the 3D printing community to fight COVID-19!</h2>
        <v-row align="stretch">
          <v-col
            cols="12"
            md="auto"
            v-for="cta in callToActions" :key="cta.title"
          >
            <v-btn dark class="grey darken-2 text-uppercase">
              {{ cta.title }}</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      callToActions: [
        { title: 'I have a 3d printer', target: 'Signup_supplier' },
        { title: 'I need masks', target: 'Signup_demand' },
        { title: 'I can deliver masks', target: 'Signup_distributor' },
      ],
    };
  },
};
</script>
