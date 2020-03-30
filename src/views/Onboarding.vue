<template>
  <v-container>
    <v-row class="justify-center">
      <v-col md="10" lg="8">
        <v-card>
          <v-card-title>Get Started</v-card-title>
          <v-card-text>
              <p class="body-2">Before you can begin, we need to know some details:</p>
              <v-form ref="onboardingForm">
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

                <section class="mt-4">
                  <span class="title">How would you like to contribute?</span><br/>
                  <span class="caption">You will be able to change this later.</span>
                  <v-chip-group v-model="roleSelection">
                    <v-chip
                      v-for="role in userRoles"
                      :key="role.value"
                      v-text="role.text"
                      class="font-weight-medium"
                      active-class="primary--text"
                    ></v-chip>
                  </v-chip-group>
                </section>

                <section
                  class="consumer-form"
                  v-if="roleFromSelection === 'consumer'"
                >
                  <GeolocationInput @input="setGeolocation"/>
                  <span class="caption">
                    We need your location to match you to suppliers and distributors near you.
                  </span>
                  <v-select
                    class="mt-4"
                    label="What type of Institution are you?"
                    v-model="consumerForm.locationType.value"
                    :items="consumerForm.locationType.choices"
                  ></v-select>
                </section>
                <section
                  class="producer-form"
                  v-if="roleFromSelection === 'producer'"
                >
                  <GeolocationInput @input="setGeolocation"/>
                  <span class="caption">
                    We need your location to match you to consumers and distributors near you.
                  </span>
                </section>

                <v-btn
                  large block
                  color="primary"
                  class="mt-4"
                  @click="submitForm"
                >Submit</v-btn>
              </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GeolocationInput from './GeolocationInput.vue';
import { consumer, distributor, producer } from '../xhr/sanitizers/registration';
import registration from '../xhr/registration';

const userRoles = [
  {
    value: 'consumer',
    text: 'I need face shields',
  },
  {
    value: 'producer',
    text: 'I can supply face shields (by 3D Printing)',
  },
  {
    value: 'distributor',
    text: 'I can distribute face shields',
  },
];

export default {
  name: 'Onboarding',
  components: { GeolocationInput },
  data() {
    return {
      userRoles,
      roleSelection: 0,
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
      consumerForm: {
        locationType: {
          value: 'HOSPITAL',
          choices: [
            { text: 'Hospital', value: 'HOSPITAL' },
            { text: 'Pharmacy', value: 'PHARMACY' },
          ],
        },
      },
      location: null,
    };
  },
  computed: {
    roleFromSelection() {
      return userRoles[this.roleSelection].value;
    },
  },
  methods: {
    setGeolocation(location) {
      const locationLatLng = {
        lat: location.latitude,
        lng: location.longitude,
      };

      this.location = locationLatLng;
    },
    validateForm() {
      if (this.$refs.onboardingForm.validate()) {
        // ensure that consumers or producers have given their location
        return !(['consumer', 'producer'].includes(this.roleFromSelection) && !this.location);
      }
      return false;
    },
    submitForm() {
      if (this.validateForm()) {
        if (this.roleFromSelection === 'consumer') {
          const newConsumer = consumer(
            this.basicForm.name.field.trim(),
            this.basicForm.phone.field.trim(),
            this.basicForm.email.field.trim(),
            this.location,
            this.consumerForm.locationType.value,
          );

          registration('consumer', newConsumer).then(this.onSuccess);
        } else if (this.roleFromSelection === 'producer') {
          const newProducer = producer(
            this.basicForm.name.field.trim(),
            this.basicForm.phone.field.trim(),
            this.basicForm.email.field.trim(),
            this.location,
          );

          registration('producer', newProducer).then(this.onSuccess);
        } else if (this.roleFromSelection === 'distributor') {
          const newDistributor = distributor(
            this.basicForm.name.field.trim(),
            this.basicForm.phone.field.trim(),
            this.basicForm.email.field.trim(),
          );

          registration('producer', newDistributor).then(this.onSuccess);
        }
      }
    },
    onSuccess() {
      this.$router.replace({ name: 'dashboard' });
    },
  },
};
</script>
