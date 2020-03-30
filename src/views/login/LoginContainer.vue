<template>
  <v-container class="login-container white d-flex flex-column">
    <!-- LOGO -->
    <v-row class="logo-container justify-center">
      <v-col class="d-flex flex-column" sm="8" lg="5">
        <div>
          <img class="logo" alt="3DtoMeds" src="../../assets/logo.jpg" />
        </div>
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
  .logo{
    width: 100%;
  }
</style>
