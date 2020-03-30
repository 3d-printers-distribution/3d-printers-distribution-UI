<template>
  <v-container fluid class="home-container white d-flex flex-column">
    <!-- LOGO -->
    <v-row class="justify-center">
      <v-col sm="8" lg="5">
        <div>
          <img class="logo" alt="3DtoMeds" src="../assets/logo.jpg" />
        </div>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col class="d-flex flex-column" sm="8">
        <h2 class="headline pb-2 text-center">
          Empowering the 3D printing community to fight COVID-19!</h2>
        <div class="d-flex flex-row flex-wrap justify-center">
            <v-btn
              dark color="primary"
              class="mr-4 mt-4"
              :block="$vuetify.breakpoint.smAndDown"
              v-for="cta in callToActions" :key="cta.title"
              :to="cta.target"
            >
              {{ cta.title }}</v-btn>
        </div>
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
        { title: 'I have a 3d printer', target: { name: 'signup', query: { type: 'producer' } } },
        { title: 'I need PPE', target: { name: 'signup', query: { type: 'consumer' } } },
        { title: 'I can distribute PPE', target: { name: 'signup', query: { type: 'distributor' } } },
      ],
    };
  },
};
</script>
<style lang="scss">
  .logo{
    width: 100%;
  }
</style>
