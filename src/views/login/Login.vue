<template>
  <login-container>
    <v-alert
      type="error"
      v-if="error"
    >
      {{ $te(`fbError.${error.code}`) ? $t(`fbError.${error.code}`) : error.message }}
    </v-alert>
    <v-container class="login-box-container white d-flex flex-column">
      <v-form
        lazy-validation

        ref="loginForm"
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
          color="primary"

          :disabled="!loginForm.valid"
          :loading="loading"
          @click="login"
        >
          {{ $t('login.form.loginBtnLabel') }}
        </v-btn>
      </v-form>
      <v-row class="px-4 justify-space-between mt-4 login-links">
        <router-link :to="{ name: 'signup' }">Sign up</router-link>
        <router-link :to="{ name: 'forgot-password' }">Forgot Password</router-link>
      </v-row>
    </v-container>
  </login-container>
</template>

<script>
import firebase from '../../plugins/firebase';
import LoginContainer from './LoginContainer.vue';

export default {
  name: 'login',
  components: { LoginContainer },
  data() {
    return {
      loading: false, // Pending request
      error: null, // Error after request
      loginForm: {
        valid: false,
        email: {
          field: '',
          rules: [
            (v) => !!v || this.$t('login.form.validation.emailRequired'), // Check if field is empty
            (v) => /.+@.+\..+/.test(v) || this.$t('login.form.validation.emailMustBeValid'), // Use regex to crudely validate the email
          ],
        },
        password: {
          field: '',
          visibility: false,
          rules: [
            (v) => !!v || this.$t('login.form.validation.passwordRequired'), // Check if field is empty
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
        firebase.auth().signInWithEmailAndPassword(
          this.loginForm.email.field,
          this.loginForm.password.field,
        ).then((user) => {
          this.loading = false;
          this.error = null;
          this.$store.commit('setUser', user.user);
          this.$router.push('/dashboard');
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
