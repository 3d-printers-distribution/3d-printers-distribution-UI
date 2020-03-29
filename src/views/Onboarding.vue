<template>
  <v-container>
    <v-row class="justify-center">
      <v-col md="10" lg="8">
        <v-card>
          <v-card-title>Get Started</v-card-title>
          <v-card-text>
              <p class="body-2">Before you can begin, we need to know some details:</p>
              <v-form ref="onboarding-form">
                <section>
                  <v-text-field
                    filled
                    label="Full name*"
                    required
                  ></v-text-field>
                  <v-text-field
                    filled
                    label="Phone Number*"
                    required
                  ></v-text-field>

                  <span class="caption">* Required</span>
                </section>

                <section class="mt-4">
                  <h3 class="title">Address</h3>
                  <p class="body-2">
                    We share your address with distributors
                    to help them pick up or drop off materials.
                  </p>
                  <v-text-field
                    filled
                    label="Address"
                    required
                  ></v-text-field>
                  <v-text-field
                    filled
                    label="City"
                    required
                  ></v-text-field>
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
      onboardingForm: {
        name: {
          field: '',
          rules: [
            (v) => !!v || this.$t('forms.validation.requiredField'), // Check if field is empty
          ],
        },
        phone: {
          field: '',
          rules: [
            (v) => !!v || this.$t('forms.validation.requiredField'), // Check if field is empty
          ],
        },
        address: {
          field: '',
          rules: [
            (v) => !!v || this.$t('forms.validation.requiredField'), // Check if field is empty
          ],
        },
        city: {
          field: '',
          rules: [
            (v) => !!v || this.$t('forms.validation.requiredField'), // Check if field is empty
          ],
        },
      },
    };
  },
};
</script>

<style scoped>
</style>
