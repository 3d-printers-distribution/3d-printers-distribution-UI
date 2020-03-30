<template>
  <v-container>
    <v-row class="justify-center">
      <v-col md="10" lg="8">
        <v-card>
          <v-card-title>Get Started as a {{ userRole }}</v-card-title>
          <v-card-text>
              <p class="body-2">Before you can begin, we need to know some details:</p>
              <v-form ref="onboarding-form">
                <section class="basic-form">
                  <v-text-field
                    filled
                    label="Full name *"
                    required
                    v-model="basicForm.name.field"
                    :rules="basicForm.name.rules"
                  ></v-text-field>
                  <v-text-field
                    filled
                    type="tel"
                    label="Phone Number *"
                    required
                    v-model="basicForm.phone.field"
                    :rules="basicForm.phone.rules"
                  ></v-text-field>
                  <v-text-field
                    filled
                    type="email"
                    label="Contact Email *"
                    required
                    v-model="basicForm.email.field"
                    :rules="basicForm.email.rules"
                  ></v-text-field>

                  <span class="caption">* Required</span>
                </section>
                <v-btn
                  large block
                  color="primary"
                  type="submit"
                >Submit</v-btn>
              </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Onboarding',
  data() {
    return {
      basicForm: {
        name: {
          field: '',
          rules: [
            (v) => !!v || this.$t('validation.fieldRequired'), // Check if field is empty
          ],
        },
        phone: {
          field: '',
          rules: [
            (v) => !!v || this.$t('validation.fieldRequired'), // Check if field is empty
          ],
        },
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
  computed: {
    userRole() {
      return this.$route.query.type || 'consumer';
    },
  },
};
</script>

<style scoped>
</style>
