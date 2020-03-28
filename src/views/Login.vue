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
          lazy-validation

          ref="loginForm"
          v-if="!showPasswordResetForm"
          v-model="loginForm.valid"
        >
          <!-- Login Email Field -->
          <v-text-field
            required
            filled

            v-model="loginForm.email.field"
            :rules="loginForm.email.rules"
            :label="$t('login.form.emailLabel')"
            :disabled="loading"
            @keypress.enter="login"
          ></v-text-field>

          <!-- Login submit button -->
          <v-text-field
            required
            filled

            v-model="loginForm.password.field"
            :rules="loginForm.password.rules"
            :label="$t('login.form.passwordLabel')"
            :disabled="loading"

            :type="loginForm.password.visibility ? 'text' : 'password'"
            :append-icon="loginForm.password.visibility ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="loginForm.password.visibility = !loginForm.password.visibility"
            @keypress.enter="login"
          ></v-text-field>

          <!-- Login submit button -->
          <v-btn
            large
            block
            dark

            :disabled="!loginForm.valid"
            :loading="loading"
            @click="login"
          >
            {{ $t('login.form.loginBtnLabel') }}
          </v-btn>
        </v-form>
          <v-form
            ref="passwordResetForm"
            v-else
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
              dark

              :color="passwordResetForm.valid ? 'white' : 'white--text'"
              :disabled="!passwordResetForm.valid"
              :loading="loading"
              @click="resetPassword"
            >
              {{ $t('login.form.resetPasswordBtnLabel') }}
            </v-btn>
          </v-form>
        <!-- Password reset toggle link -->
        <a
          class="black--text d-block mt-4"
          @click="showPasswordResetForm = !showPasswordResetForm"
        >
          {{ showPasswordResetForm ? $t('login.backToLogin') : $t('login.forgotPassword') }}
        </a>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'login',
  data() {
    return {
      loading: false, // Pending request
      error: null, // Error after request
      showPasswordResetForm: false,
      passwordResetSuccess: false,
      loginForm: {
        valid: false,
        email: {
          field: '',
          rules: [
            (v) => !!v || this.$t('forms.validation.emailRequired'), // Check if field is empty
            (v) => /.+@.+\..+/.test(v) || this.$t('forms.validation.emailMustBeValid'), // Use regex to crudely validate the email
          ],
        },
        password: {
          field: '',
          visibility: false,
          rules: [
            (v) => !!v || this.$t('forms.validation.passwordRequired'), // Check if field is empty
          ],
        },
      },
      passwordResetForm: {
        valid: false,
        email: {
          field: '',
          rules: [
            (v) => !!v || this.$t('forms.validation.emailRequired'), // Check if field is empty
            (v) => /.+@.+\..+/.test(v) || this.$t('forms.validation.emailMustBeValid'), // Use regex to crudely validate the email
          ],
        },
      },
    };
  },
  methods: {
    /**
     * Send a request to login with Firebase, if the form is valid.
     */
    login() {
      if (this.$refs.loginForm.validate()) {
        this.loading = true;
        firebase.auth.signInWithEmailAndPassword(
          this.loginForm.email.field,
          this.loginForm.password.field,
        ).then((user) => {
          this.loading = false;
          this.error = null;
          this.$store.commit('setCurrentUser', user.user);
          this.$store.dispatch('fetchUserProfile');
          this.$router.push('/dashboard');
        }).catch((err) => {
          this.loading = false;
          this.error = err;
        });
      }
    },
    /**
     * Send a request to reset a users password, if the form is valid.
     */
    resetPassword() {
      if (this.$refs.passwordResetForm.validate()) {
        this.loading = true;
        firebase.auth.sendPasswordResetEmail(
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
</style>
