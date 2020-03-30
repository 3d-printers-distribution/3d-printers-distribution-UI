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
      ref="createAccountForm"
      v-model="createAccountForm.valid"
    >
      <!-- Create account email field -->
      <v-text-field
        required
        filled

        v-model="createAccountForm.email.field"
        :rules="createAccountForm.email.rules"
        :label="$t('login.form.emailLabel')"
        :disabled="loading"
      ></v-text-field>
      <v-text-field
        required
        filled

        v-model="createAccountForm.password.field"
        :rules="createAccountForm.password.rules"
        :label="$t('login.form.passwordLabel')"
        :disabled="loading"
        :type="createAccountForm.password.visibility ? 'text' : 'password'"
        :append-icon="createAccountForm.password.visibility ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append=
          "createAccountForm.password.visibility = !createAccountForm.password.visibility"
        @keypress.enter="createAccount"
      ></v-text-field>
      <!-- Create account submit button -->
      <v-btn
        large
        block
        color="primary"

        :disabled="!createAccountForm.valid"
        :loading="loading"
        @click="createAccount"
      >
        {{ $t('login.form.createAccountBtnLabel') }}
      </v-btn>
    </v-form>
    <v-row class="px-4 justify-center mt-4 login-links">
      <router-link :to="{ name: 'login' }">Back to login</router-link>
    </v-row>  </v-container>
</login-container>
</template>

<script>
import firebase from '../../plugins/firebase';
import LoginContainer from './LoginContainer.vue';

export default {
  name: 'Signup',
  components: { LoginContainer },
  data() {
    return {
      loading: false, // Pending request
      error: null, // Error after request
      showCreateAccountForm: false,
      CreateAccountSuccess: false,
      createAccountForm: {
        valid: false,
        email: {
          field: '',
          rules: [
            (v) => !!v || this.$t('validation.emailRequired'), // Check if field is empty
            (v) => /.+@.+\..+/.test(v) || this.$t('validation.emailMustBeValid'), // Use regex to crudely validate the email
          ],
        },
        password: {
          field: '',
          visibility: false,
          rules: [
            (v) => !!v || this.$t('validation.passwordRequired'), // Check if field is empty
          ],
        },
      },
    };
  },
  methods: {
    /**
       * Send a request to login with Firebase, if the form is valid.
       */
    createAccount() {
      if (this.$refs.createAccountForm.validate()) {
        this.loading = true;
        firebase.auth().createUserWithEmailAndPassword(
          this.createAccountForm.email.field,
          this.createAccountForm.password.field,
        ).then(() => {
          this.loading = false;
          this.error = null;
          this.CreateAccountSuccess = true;
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
