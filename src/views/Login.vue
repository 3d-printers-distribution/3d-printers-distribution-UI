<template>
  <v-container class="login-container white d-flex flex-column">
    <!-- LOGO -->
    <v-row class="logo-container">
      <v-col class="d-flex justify-center flex-column">
        <img alt="Virus" src="../assets/virus.svg" />
      </v-col>
    </v-row>

    <!-- FORM CONTAINER adheres to bottom -->
    <v-row justify="center" class="form-container flex-grow-0 text-center">
      <v-col align-self="end" lg="4" md="5" sm="8">
        <v-container class="login-box-container white d-flex flex-column">
        <v-form
          lazy-validation
        >
          <!-- Login Email Field -->
          <v-text-field
            required
            filled
          ></v-text-field>

          <!-- Login submit button -->
          <v-text-field
            required
            filled
          ></v-text-field>

          <!-- Login submit button -->
          <v-btn
            large
            block
            dark
          >
            Login
          </v-btn>
        </v-form>
        <!-- Password reset toggle link -->
        <a
          class="black--text d-block mt-4"
        >
        </a>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'login',
};
</script>

<style lang="scss">
  .login-container {
    height: 100%;
    max-width: unset !important;

    .form-container {
      margin-bottom: 5rem;
      min-height: 216px;
    }
    .login-box-container{
      margin-bottom: 1rem;
      border-radius:5px;
      padding: 2rem;
    }
  }
</style>
