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
        <h2
          class="headline pb-2 text-center"
        >Empowering the 3D printing community to fight COVID-19!</h2>
        <div class="d-flex flex-row flex-wrap justify-center">
          <v-btn
            dark
            color="primary"
            class="mr-4 mt-4"
            :block="$vuetify.breakpoint.smAndDown"
          >Signup to contribute</v-btn>
          <br />
        </div>
        <div>
          <div class="subtitle-1 text-center my-4">
            Join us, if you would like to help as:
            <br />
            <v-btn dark color="secondary" class="mr-4 mt-4">3d-printer-owner</v-btn>
            <v-btn dark color="secondary" class="mr-4 mt-4">Distributor</v-btn>
            <v-btn dark color="secondary" class="mr-4 mt-4">Face-shield consumer</v-btn>
          </div>
          <div class="subtitle-1 text-center my-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xkrW_oU3lxA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope;
                  picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
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
.logo {
  width: 100%;
}
</style>
