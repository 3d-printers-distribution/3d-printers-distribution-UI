<template>
  <v-container
    fluid
    class="home grey"
  >
    <v-row>
      <img src="../assets/images/virus-outline-2.svg" alt="">
      <v-col align-self="center">
        <h2>Quickly distribute 3D-Printed Masks to where they are needed!</h2>
        <v-row align="stretch">
          <v-col
            cols="12"
            md="auto"
          >
            <v-btn dark class="grey darken-2">I HAVE A 3D PRINTER</v-btn>
          </v-col>
          <v-col
            cols="12"
            md="auto"
          >
            <v-btn dark class="grey darken-2">I NEED MASKS</v-btn>
          </v-col>
          <v-col
            cols="12"
            md="auto"
          >
            <v-btn dark class="grey darken-2">I CAN DELIVER MASKS</v-btn>
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


<style scoped>

</style>
