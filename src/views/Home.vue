<template>
  <v-container
    fluid
    class="home grey pa-md-12"
  >
    <v-row>
      <img src="../assets/images/virus-outline-2.svg" alt="">
      <v-col
        align-self="center"
        class="pa-8 ma-8"
      >
        <h2 class="headline pb-2">Quickly distribute 3D-Printed Masks to where they are needed!</h2>
        <v-row align="stretch">
          <v-col
            cols="12"
            md="auto"
          >
            <v-btn dark class="grey darken-2 text-uppercase">I have a 3d printer</v-btn>
          </v-col>
          <v-col
            cols="12"
            md="auto"
          >
            <v-btn dark class="grey darken-2 text-uppercase">I need masks</v-btn>
          </v-col>
          <v-col
            cols="12"
            md="auto"
          >
            <v-btn dark class="grey darken-2 text-uppercase">I can deliver masks</v-btn>
          </v-col>
          <v-col
            cols="12"
            md="auto"
          >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
};
</script>
