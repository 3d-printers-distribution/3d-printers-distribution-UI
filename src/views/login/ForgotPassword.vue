<template>
<login-container>
  <v-alert
    type="error"
    v-if="error"
  >
    {{ $te(`fbError.${error.code}`) ? $t(`fbError.${error.code}`) : error.message }}
  </v-alert>
  <!-- Password reset success alert -->
  <v-alert
    type="success"
    v-if="passwordResetSuccess"
  >
    {{ $t(`login.passwordResetSuccess`) }}
  </v-alert>
  <v-container class="login-box-container white d-flex flex-column">
    <v-form
      ref="passwordResetForm"
      v-model="passwordResetForm.valid"
    >
      <!-- Password reset email field -->
      <v-text-field
        required
        filled

        v-model="passwordResetForm.email.field"
        :rules="passwordResetForm.email.rules"
        :label="$t('login.form.emailLabel')"
        :disabled="loading"
        @keypress.enter="resetPassword"
      ></v-text-field>
      <!-- Password reset submit button -->
      <v-btn
        large
        block
        color="primary"

        :disabled="!passwordResetForm.valid"
        :loading="loading"
        @click="resetPassword"
      >
        {{ $t('login.form.resetPasswordBtnLabel') }}
      </v-btn>
    </v-form>
    <v-row class="px-4 justify-center mt-4 login-links">
      <router-link :to="{ name: 'login' }">Back to login</router-link>
    </v-row>
  </v-container>
</login-container>
</template>

<script>
import firebase from '../../plugins/firebase';
import LoginContainer from './LoginContainer.vue';

export default {
  name: 'forgot-password',
  components: { LoginContainer },
  data() {
    return {
      loading: false, // Pending request
      error: null, // Error after request
      showPasswordResetForm: false,
      passwordResetSuccess: false,
      passwordResetForm: {
        valid: false,
        email: {
          field: '',
          rules: [
            (v) => !!v || this.$t('validation.emailRequired'), // Check if field is empty
            (v) => /.+@.+\..+/.test(v) || this.$t('validation.emailMustBeValid'), // Use regex to crudely validate the email
          ],
        },
      },
    };
  },
  methods: {
    /**
     * Send a request to reset a users password, if the form is valid.
     */
    resetPassword() {
      if (this.$refs.passwordResetForm.validate()) {
        this.loading = true;
        firebase.auth().sendPasswordResetEmail(
          this.passwordResetForm.email.field,
        ).then(() => {
          this.loading = false;
          this.error = null;
          this.passwordResetSuccess = true;
        }).catch((err) => {
          this.loading = false;
          this.error = err;
        });
      }
    },
  },
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
  .login-links a{
    color: black;
    text-decoration: none;
  }
</style>
