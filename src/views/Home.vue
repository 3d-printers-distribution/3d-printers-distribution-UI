<template>
  <v-container fluid class="white d-flex flex-column">
    <!-- LOGO -->
    <v-row class="justify-center">
      <v-col sm="8" lg="5">
        <div>
          <img class="logo" alt="3DtoMeds" src="../assets/logo.jpg" />
        </div>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col class="d-flex flex-column align-center" sm="8">
        <h2
          class="headline pb-2 text-center"
        >Empowering the 3D printing community to fight COVID-19!</h2>
        <div class="subtitle-1 text-center my-4">
          Join us, if you would like to help as:
          <br />
          <v-btn dark color="secondary" class="mr-4 mt-4">3d-printer-owner</v-btn>
          <v-btn dark color="secondary" class="mr-4 mt-4">Distributor</v-btn>
          <v-btn dark color="secondary" class="mr-4 mt-4">Face-shield consumer</v-btn>
        </div>
        <div>
          <v-btn
            dark
            color="primary"
            class="mr-4 mt-4"
            :block="$vuetify.breakpoint.smAndDown"
            :to="{ name: 'signup' }"
          >Signup to contribute</v-btn>
        </div>
        <iframe
          class="iFrame"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xkrW_oU3lxA"
          allow="accelerometer; autoplay; encrypted-media; gyroscope;
                  picture-in-picture"
          allowfullscreen
        ></iframe>
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
.iFrame {
  margin-bottom: 4rem;
  margin-top: 4rem;
  border: none;
}
</style>
