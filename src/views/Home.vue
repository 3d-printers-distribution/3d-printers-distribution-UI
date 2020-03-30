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
            :to="{ name: 'signup' }"
          >
            Signup to contribute
          </v-btn>
          <div class="subtitle-1 text-center my-4">
            Join us, if you can help as a supplier (3d-printer-owner), as a
            demanding facility (hospital, dental clinic, pharmacy,...) or as a distributor
            (volunteer, civil servant, ...).
          </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/xkrW_oU3lxA"
                  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;
                  picture-in-picture" allowfullscreen></iframe>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
};
</script>
<style lang="scss">
  .logo{
    width: 100%;
  }
</style>
