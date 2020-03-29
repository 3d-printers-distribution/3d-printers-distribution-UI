<template>
  <v-container class="login-container white d-flex flex-column">
    <!-- LOGO -->
    <v-row class="logo-container">
      <v-col class="d-flex justify-center flex-column">
        <img alt="Virus" src="../../assets/virus.svg" />
      </v-col>
    </v-row>

    <!-- FORM CONTAINER adheres to bottom -->
    <v-row justify="center" class="form-container flex-grow-0 text-center">
      <v-col align-self="end" lg="4" md="5" sm="8">
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'loginContainer',
};
</script>

<style lang="scss">
  .login-container {
    height: 100%;
    max-width: unset !important;
  }
</style>
